"use server";

import { Address } from "@/interfaces";
import { prisma } from "@/lib/prisma";

export const setUserAddress = async (address: Address, userId: string) => {
  try {
    const newAddress = await createOrReplaceAddress(address, userId);

    return {
      ok: true,
      message: "[success]",
      data: {
        address: newAddress
      }
    };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      data: {
        address: null
      },
      message: "[server-error]"
    };
  }
};

const createOrReplaceAddress = async (address: Address, userId: string) => {
  try {
    const storedAddress = await prisma.userAddress.findUnique({ where: { userId } });

    const addressToSave = {
      userId: userId,
      address: address.address,
      address2: address.address2,
      countryId: address.country,
      firstName: address.firstName,
      lastName: address.lastName,
      phone: address.phone,
      postalCode: address.postalCode,
      city: address.city
    };

    if (!storedAddress) {
      const newAddress = await prisma.userAddress.create({
        data: addressToSave
      });

      return newAddress;
    }

    const updatedAddress = await prisma.userAddress.update({
      where: {
        userId: userId,
      },
      data: addressToSave
    });

    return updatedAddress;
  } catch (error) {
    console.error(error);
    throw new Error("[cannot-save-address]");
  }
};