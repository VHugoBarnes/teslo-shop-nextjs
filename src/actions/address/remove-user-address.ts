"use server";

import { prisma } from "@/lib/prisma";

export const removeUserAddress = async (userId: string) => {
  try {
    await prisma.userAddress.delete({ where: { userId } });

    return {
      ok: true,
      data: {
        address: null
      },
      message: "[success]"
    };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      data: null,
      message: "[server-error]"
    };
  }
};