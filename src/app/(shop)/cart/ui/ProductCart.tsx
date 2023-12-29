"use client";

import { QuantitySelector, Subtitle, Text } from "@/components";
import { CartProduct } from "@/interfaces";
import Image from "next/image";
import React from "react";

export function ProductCart({ product }: { product: CartProduct }) {
  const [quantity, setQuantity] = React.useState(product.quantity);

  return (
    <div key={product.slug} className="flex space-x-5">
      <Image
        src={`/products/${product.image}`}
        width={100}
        height={100}
        alt={product.title}
        unoptimized
        className="rounded w-28 h-32"
      />
      <div>
        <Subtitle>{product.size} - {product.title}</Subtitle>
        <Text>${product.price}</Text>
        <QuantitySelector quantity={quantity} stock={product.inStock} onQuantityChange={setQuantity} />
        <button className="underline">
          Remove
        </button>
      </div>
    </div>
  );
};