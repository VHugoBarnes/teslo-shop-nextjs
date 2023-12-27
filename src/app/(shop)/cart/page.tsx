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
    <div className="flex justify-center items-center mb-72 px-0 sm:px-10">
      <div className="flex flex-col w-full md:w-9/12">
        <Title>
          Cart
        </Title>

        <div className="flex flex-col md:flex-row items-start space-y-8 space-x-0 md:space-x-10 md:space-y-0">
          {/* Carrito */}
          <div className="flex flex-col mt-5 space-y-5">
            <span className="text-xl">Add more items</span>
            <Link href="/" className="underline">Continue shopping</Link>

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
                      className="rounded w-28 h-32"
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
          </div>

          {/* Checkout */}
          <div className="bg-white rounded-xl shadow-xl p-7 space-y-4 flex-grow">
            <Subtitle>
              Order summary
            </Subtitle>

            <div className="grid grid-cols-2 gap-2">
              <span>Products</span>
              <span className="text-right">3 articles</span>

              <span>Subtotal</span>
              <span className="text-right">$100</span>

              <span>Tax (15%)</span>
              <span className="text-right">$15</span>

              <span className="text-xl font-semibold">Total:</span>
              <span className="text-right text-xl font-semibold">$115</span>
            </div>

            <div>
              <Link href="/checkout/address" className="flex btn-primary justify-center">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};