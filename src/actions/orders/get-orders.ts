"use server";

import { auth } from "@/auth.config";
import { prisma } from "@/lib/prisma";

export const getOrders = async () => {
  const session = await auth();
  const userId = session?.user.id;

  if (!userId) {
    return {
      ok: false,
      message: "[no-auth]",
      data: {
        orders: null
      }
    };
  }

  try {
    const orders = await prisma.order.findMany({
      where: { userId: userId },
      select: {
        id: true,
        OrderAddress: {
          select: {
            firstName: true,
            lastName: true,
          }
        },
        isPaid: true,
      }
    });

    return {
      ok: true,
      message: "[success]",
      data: {
        orders: orders.map(order => {
          const { OrderAddress, ...restOrder } = order;

          return {
            ...restOrder,
            fullName: `${OrderAddress?.firstName} ${OrderAddress?.lastName}`
          };
        })
      }
    };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      message: "[server-error]",
      data: {
        orders: null
      }
    };
  }
};