"use client";

import { QuantitySelector, Subtitle, Text } from "@/components";
import { CartProduct } from "@/interfaces";
import { useCartStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function ProductCart({ product }: { product: CartProduct }) {
  const updateProductQuantity = useCartStore(state => state.updateProductQuantity);
  const removeProduct = useCartStore(state => state.removeProduct);

  const [quantityChanged, setQuantityChanged] = React.useState(false);
  const [quantity, setQuantity] = React.useState(product.quantity);

  const updateQuantity = () => {
    updateProductQuantity({
      ...product,
      quantity: quantity
    });
    setQuantityChanged(false);
  };

  const onSetQuantity = (value: number) => {
    setQuantityChanged(true);
    setQuantity(value);
  };

  const onRemoveProduct = () => {
    removeProduct(product);
  };

  return (
    <div key={product.slug} className="flex space-x-5 items-start">
      <Image
        src={`/products/${product.image}`}
        width={100}
        height={100}
        alt={product.title}
        unoptimized
        className="rounded w-28 h-32"
      />
      <div className="space-y-1">
        <Subtitle className="cursor-pointer hover:underline"><Link href={`/product/${product.slug}`}>{product.size} - {product.title}</Link></Subtitle>
        <Text>${product.price * quantity}</Text>
        <QuantitySelector quantity={quantity} stock={product.inStock} onQuantityChange={onSetQuantity} />
        <div className="flex space-x-2 items-center">
          <button className="underline" onClick={() => { onRemoveProduct(); }}>
            Remove
          </button>
          {
            quantityChanged && (
              <button className="underline" onClick={() => { updateQuantity(); }}>
                Update quantity
              </button>
            )
          }
        </div>
      </div>
    </div>
  );
};