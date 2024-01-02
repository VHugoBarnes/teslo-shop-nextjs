import { Subtitle, Text } from "@/components";
import { CartProduct, OrderItem } from "@/interfaces";
import Image from "next/image";
import React from "react";

export function OrderItem({ item }: { item: OrderItem }) {
  return (
    <div className="flex space-x-5 items-start">
      <Image
        src={`/products/${item.product.image}`}
        width={100}
        height={100}
        alt={item.product.title}
        unoptimized
        className="rounded w-28 h-32"
      />
      <div className="space-y-1">
        <Subtitle className="cursor-pointer hover:underline">{item.size} - {item.product.title}</Subtitle>
        <Text>${item.price}x{item.quantity}</Text>
        <Text className="font-bold">Subtotal: ${(item.price * item.quantity).toFixed(2)}</Text>
      </div>
    </div>
  );
};