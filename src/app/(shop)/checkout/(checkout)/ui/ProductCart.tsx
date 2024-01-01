"use client";

import { QuantitySelector, Subtitle, Text } from "@/components";
import { CartProduct } from "@/interfaces";
import { useCartStore } from "@/store";
import Image from "next/image";
import React from "react";

export function ProductCart({ product }: { product: CartProduct }) {
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
        <Subtitle className="cursor-pointer hover:underline">{product.size} - {product.title}</Subtitle>
        <Text>${product.price}x{product.quantity}</Text>
        <Text className="font-bold">${(product.price * product.quantity).toFixed(2)}</Text>
      </div>
    </div>
  );
};