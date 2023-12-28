"use client";

import { QuantitySelector, SizeSelector } from "@/components";
import { Product, Size } from "@/interfaces";
import React from "react";

interface Props {
  product: Product;
}

export function AddToCard({ product }: Props) {
  const [size, setSize] = React.useState<Size | undefined>();
  const [quantity, setQuantity] = React.useState<number>(1);

  const addToCart = () => {
    console.log({ size, quantity });
  };

  return (
    <>
      {/* Size selector */}
      <SizeSelector availableSizes={product.sizes} selectedSize={size} onSizeChange={setSize} />

      {/* Quantity Selector */}
      <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} stock={product.inStock} />

      {/* Button */}
      <button className="btn-primary" onClick={addToCart}>
        Add to cart
      </button>
    </>
  );
};