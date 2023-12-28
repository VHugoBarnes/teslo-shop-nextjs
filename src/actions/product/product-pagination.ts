"use server";
import { prisma } from "@/lib/prisma";
import type { Gender } from "@/lib/prisma";

interface PaginationOptions {
  page?: number;
  take?: number;
  gender?: Gender
};

export const getPaginatedProductsWithImages = async ({ page = 1, take = 12, gender }: PaginationOptions) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  if (isNaN(Number(take))) take = 12;
  if (take < 1) take = 1;

  const filter: { gender?: Gender } = {};

  if (gender) {
    filter.gender = gender;
  }

  try {
    const products = await prisma.product.findMany({
      where: filter,
      take: take,
      skip: (page - 1) * take,
      include: {
        ProductImage: {
          take: 2,
          select: {
            url: true
          }
        }
      }
    });

    const totalCount = await prisma.product.count({ where: filter });
    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages: totalPages,
      products: products.map(product => ({
        ...product,
        images: product.ProductImage.map(image => image.url)
      }))
    };
  } catch (error) {
    throw error;
  }
};