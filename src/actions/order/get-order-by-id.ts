"use server";

import { auth } from "@/auth.config";
import { prisma } from "@/lib/prisma";

export const getOrderById = async (orderId: string) => {
  const session = await auth();
  const userId = session?.user.id;

  if (!userId) {
    return {
      ok: false,
      message: "[no-auth]",
      data: {
        order: null
      }
    };
  }

  try {
    const order = await prisma.order.findFirst({
      where: {
        id: orderId,
        userId: userId
      },
      select: {
        createdAt: true,
        id: true,
        isPaid: true,
        itemsInOrder: true,
        paidAt: true,
        subTotal: true,
        tax: true,
        total: true,
        OrderAddress: {
          select: {
            address: true,
            address2: true,
            city: true,
            firstName: true,
            lastName: true,
            phone: true,
            postalCode: true,
            country: true,
          }
        },
        OrderItem: {
          select: {
            quantity: true,
            price: true,
            size: true,
            product: {
              select: {
                title: true,
                price: true,
                slug: true,
                ProductImage: {
                  select: {
                    url: true
                  }
                }
              }
            }
          }
        }
      }
    });

    if (!order) {
      return {
        ok: false,
        message: "[order-not-found]",
        data: {
          order: null,
        }
      };
    }

    const { OrderAddress, OrderItem, ...restOrder } = order;

    return {
      ok: true,
      message: "[success]",
      data: {
        order: {
          ...restOrder,
          address: {
            ...OrderAddress!,
            country: OrderAddress?.country.name!
          },
          items: OrderItem.map((item) => {
            const { ProductImage, ...restProduct } = item.product;
            return {
              ...item,
              product: {
                ...restProduct,
                image: ProductImage[0].url
              }
            };
          })
        }
      }
    };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      data: {
        order: null
      },
      message: "[server-error]"
    };
  }
};