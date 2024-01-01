"use server";

import { auth } from "@/auth.config";
import type { Address, Size } from "@/interfaces";

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

    console.log({ userId, productIds, address });
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      message: "[server-error]",
      data: null
    };
  }
};