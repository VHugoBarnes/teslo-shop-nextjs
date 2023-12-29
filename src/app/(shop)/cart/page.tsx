import { Subtitle, Title } from "@/components";
import Link from "next/link";
import React from "react";
import { ProductsInCart } from "./ui/ProductsInCart";

export default function CartPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-0 sm:px-10">
      <div className="flex flex-col w-full md:w-9/12">
        <Title>
          Cart
        </Title>

        <div className="flex flex-col md:flex-row items-start space-y-10 space-x-0 md:space-x-10 md:space-y-0">
          {/* Carrito */}
          <div className="flex flex-col mt-5 space-y-6 w-5/12">
            <div className="space-y-2">
              <p className="text-xl">Add more items</p>
              <Link href="/" className="underline">Continue shopping</Link>
            </div>

            {/* Items */}
            <ProductsInCart />
          </div>

          {/* Checkout */}
          <div className="bg-white rounded-xl shadow-xl p-7 space-y-4 flex-grow w-full md:w-4/12">
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