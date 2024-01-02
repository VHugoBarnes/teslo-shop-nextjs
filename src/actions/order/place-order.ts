"use server";

import { auth } from "@/auth.config";
import type { Address, Size } from "@/interfaces";
import { prisma } from "@/lib/prisma";

interface ProductToOrder {
  productId: string;
  quantity: number;
  size: Size;
};

export const placeOrder = async (productIds: ProductToOrder[], address: Address) => {
  try {
    const session = await auth();
    const userId = session?.user.id;

    if (!userId) {
      return {
        ok: false,
        message: "[no-auth]",
        data: null
      };
    }

    if (productIds.length === 0) {
      return {
        ok: false,
        message: "[no-products]",
        data: null
      };
    }

    const products = await prisma.product.findMany({
      where: {
        id: {
          in: productIds.map(p => p.productId)
        }
      }
    });

    // Calculate price
    const itemsInOrder = productIds.reduce((count, p) => count + p.quantity, 0);

    const { subTotal, tax, total } = productIds.reduce((totals, item) => {
      const productQuantity = item.quantity;
      const product = products.find(p => p.id === item.productId);

      if (!product) throw new Error("[item-doesnt-exist]");

      const subTotal = product.price * productQuantity;

      totals.subTotal += subTotal;
      totals.tax += subTotal * 0.15;
      totals.total += subTotal * 1.15;

      return totals;
    }, { subTotal: 0, tax: 0, total: 0 });

    const prismaTx = await prisma.$transaction(async (tx) => {
      // Update stock of products
      const updatedProductPromises = products.map((product) => {
        // Accomulate values
        const productQuantity = productIds.filter(
          p => p.productId === product.id
        ).reduce((acc, item) => item.quantity + acc, 0);

        if (productQuantity === 0) {
          throw new Error("[no-product]");
        }

        return tx.product.update({
          where: { id: product.id },
          data: {
            inStock: {
              decrement: productQuantity
            }
          }
        });
      });

      const updatedProducts = await Promise.all(updatedProductPromises);

      // Verify negative values (no stock)
      updatedProducts.forEach(product => {
        if (product.inStock < 0) {
          throw new Error(`No stock left for ${product.title}`);
        }
      });

      // Create order
      const order = await tx.order.create({
        data: {
          userId: userId,
          itemsInOrder: itemsInOrder,
          subTotal: subTotal,
          tax: tax,
          total: total,
          OrderItem: {
            createMany: {
              data: productIds.map(p => ({
                quantity: p.quantity,
                size: p.size,
                productId: p.productId,
                price: products.find(product => product.id === p.productId)?.price ?? 0
              }))
            }
          }
        }
      });

      // Check if order item price is 0 to throw an error
      const { country, ...restAddress } = address;
      const orderAddress = await tx.orderAddress.create({
        data: {
          ...restAddress,
          countryId: country,
          orderId: order.id
        }
      });

      // Create order address

      return {
        updatedProducts: [],
        order: order,
        orderAddress: orderAddress
      };
    });

    return {
      ok: true,
      message: "[success]",
      data: {
        transaction: prismaTx
      }
    };
  } catch (error: any) {
    console.error(error);
    return {
      ok: false,
      message: error?.message,
      data: null
    };
  }
};