import { QuantitySelector, Subtitle, Text, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CartPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-2/3">
        <Title>
          Cart
        </Title>

        <div className="grid grid-col-1 md:grid-col-2 space-y-8">
          {/* Carrito */}
          <div className="flex flex-col mt-5 space-y-5">
            <span className="text-xl">Add more items</span>
            <Link href="/" className="underline">Continue shopping</Link>
          </div>

          {/* Items */}
          <div className="space-y-4">
            {
              productsInCart.map((product) => (
                <div key={product.slug} className="flex space-x-5">
                  <Image
                    src={`/products/${product.images[0]}`}
                    width={100}
                    height={100}
                    alt={product.title}
                    className="rounded"
                  />
                  <div>
                    <Subtitle>{product.title}</Subtitle>
                    <Text>${product.price}</Text>
                    <QuantitySelector quantity={3} />
                    <button className="underline">
                      Remove
                    </button>
                  </div>
                </div>
              ))
            }
          </div>

          {/* Checkout */}
        </div>
      </div>
    </div>
  );
};