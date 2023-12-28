import { getPaginatedProductsWithImages } from "@/actions";
import { ItemNotFound, Pagination, ProductGrid, Subtitle, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    gender: Category
  },
  searchParams: {
    page?: string
  }
};

export default async function CategoryPage({ params, searchParams }: Props) {
  const { gender } = params;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  if (!["men", "women", "kid"].includes(gender)) {
    notFound();
  }

  const { currentPage, products, totalPages } = await getPaginatedProductsWithImages({ page: page, gender: gender });
  console.log({ currentPage, totalPages });

  return (
    <div className="space-y-2">
      <Title>Shop</Title>
      <Subtitle className="capitalize">{gender}</Subtitle>

      <ProductGrid products={products} />

      {
        products.length === 0 && (<ItemNotFound />)
      }

      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
};