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
  const [sizeError, setSizeError] = React.useState(false);

  const addToCart = () => {
    if (size === undefined) {
      setSizeError(true);
    }
    console.log({ size, quantity });
  };

  React.useEffect(() => {
    if (size !== undefined && sizeError === true) {
      setSizeError(false);
    }
  }, [size, sizeError]);

  return (
    <>
      {/* Size selector */}
      <SizeSelector availableSizes={product.sizes} selectedSize={size} onSizeChange={setSize} />

      {
        sizeError && (
          <p className="text-red-500 font-semibold animate-bounce">
            Select a size
          </p>
        )
      }

      {/* Quantity Selector */}
      <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} stock={product.inStock} />

      {/* Button */}
      <button className="btn-primary" onClick={addToCart}>
        Add to cart
      </button>
    </>
  );
};