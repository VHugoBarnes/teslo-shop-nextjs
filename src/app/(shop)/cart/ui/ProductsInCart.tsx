"use client";

import { useCartStore } from "@/store";
import React from "react";
import { ProductCart } from "./ProductCart";

export function ProductsInCart() {
  const [loading, setLoading] = React.useState(true);
  const productsInCart = useCartStore(state => state.cart);

  React.useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="w-full h-44 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-full h-44 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-full h-44 bg-gray-200 rounded animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {
        productsInCart.map((product) => (
          <ProductCart key={`${product.id} - ${product.size}`} product={product} />
        ))
      }
    </div>
  );
};