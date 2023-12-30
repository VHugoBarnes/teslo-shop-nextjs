"use server";
import { prisma } from "@/lib/prisma";

export const getUserAddress = async (userId: string) => {
  try {
    const userAddress = await prisma.userAddress.findUnique({ where: { userId: userId } });

    if (userAddress === null) {
      return {
        ok: true,
        message: "[success]",
        data: {
          address: null
        }
      };
    }

    const { userId: uid, countryId, ...rest } = userAddress;

    return {
      ok: true,
      message: "[success]",
      data: {
        address: {
          ...rest,
          address2: rest.address2 ? rest.address2 : "",
          country: countryId
        }
      }
    };
  } catch (error) {
    console.error(error);

    return {
      ok: false,
      message: "[server-error]",
      data: {
        address: null
      }
    };
  }
};