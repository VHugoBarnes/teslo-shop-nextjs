import { Product } from "@/interfaces";
import React from "react";
import { ProductGridItem } from "./ProductGridItem";

interface Props {
  products: Product[];
};

export function ProductGrid({ products }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
      {
        products.map(product => (
          <ProductGridItem key={product.slug} product={product} />
        ))
      }
    </div>
  );
};