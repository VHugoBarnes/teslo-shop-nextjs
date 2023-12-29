"use client";

import { QuantitySelector, SizeSelector } from "@/components";
import { Product, Size } from "@/interfaces";
import { useCartStore } from "@/store";
import React from "react";

interface Props {
  product: Product;
}

export function AddToCard({ product }: Props) {
  const addProductToCart = useCartStore(state => state.addProductToCart);

  const [size, setSize] = React.useState<Size | undefined>();
  const [quantity, setQuantity] = React.useState<number>(1);
  const [sizeError, setSizeError] = React.useState(false);

  const addToCart = () => {
    if (size === undefined) {
      setSizeError(true);
      return;
    }

    addProductToCart({
      id: product.id,
      image: product.images[0],
      price: product.price,
      quantity: quantity,
      size: size,
      slug: product.slug,
      title: product.title,
      inStock: product.inStock
    });
    setSizeError(false);
    setQuantity(1);
    setSize(undefined);
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