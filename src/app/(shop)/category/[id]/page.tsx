import { ItemNotFound, ProductGrid, Subtitle, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: string
  }
};

const products = initialData.products;

export default function CategoryPage({ params }: Props) {
  const { id } = params;

  if (!["men", "women", "kid"].includes(id)) {
    notFound();
  }

  const filteredProducts = products.filter(product => product.gender.toLowerCase() === id.toLowerCase());

  return (
    <div className="space-y-2">
      <Title>Shop</Title>
      <Subtitle className="capitalize">{id}</Subtitle>

      <ProductGrid products={filteredProducts} />
      {
        filteredProducts.length === 0 && (<ItemNotFound />)
      }
    </div>
  );
};