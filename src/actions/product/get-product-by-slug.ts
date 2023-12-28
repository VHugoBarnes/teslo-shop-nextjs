"use server";
import { prisma } from "@/lib/prisma";
import { Product } from "@prisma/client";
import { notFound } from "next/navigation";

interface Options {
  slug: string;
};

export const getProductBySlugWithImages = async ({ slug }: Options) => {
  try {
    const product = await prisma.product.findFirst({
      where: { slug: slug },
      include: {
        ProductImage: { select: { url: true } }
      }
    });

    if (product === null) {
      return {
        product: null
      };
    }

    const { ProductImage, ...rest } = product;

    return {
      product: {
        ...rest,
        images: ProductImage.map(image => image.url)
      }
    };
  } catch (error) {
    throw error;
  }
};