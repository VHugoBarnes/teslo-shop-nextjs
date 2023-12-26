import { Product } from "@/interfaces";
import React from "react";

interface Props {
  products: Product[];
};

export function ProductGrid({ products }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
      {
        products.map(product => (
          <div key={product.slug}>
            {JSON.stringify(product, null, 2)}
          </div>
        ))
      }
    </div>
  );
};