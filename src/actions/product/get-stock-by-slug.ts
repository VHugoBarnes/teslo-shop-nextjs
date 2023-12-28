"use server";
import { prisma } from "@/lib/prisma";

export const getStockBySlug = async (slug: string) => {
  try {
    const product = await prisma.product.findFirst({ where: { slug: slug }, select: { inStock: true } });

    if (product === null) {
      return {
        stock: null,
      };
    }

    return {
      stock: product.inStock
    };
  } catch (error) {
    throw error;
  }
};