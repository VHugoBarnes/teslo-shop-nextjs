import { Subtitle, Title } from "@/components";
import Link from "next/link";
import React from "react";
import { ProductsInCart } from "./ui/ProductsInCart";
import { OrderSummary } from "./ui/OrderSummary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart",
};

export default function CartPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-2 sm:px-10">
      <div className="flex flex-col w-full md:w-9/12 space-y-8">
        <Title>
          Cart
        </Title>

        <div className="flex flex-col lg:flex-row items-start space-y-10 space-x-0 lg:space-x-10 lg:space-y-0">
          {/* Carrito */}
          <div className="flex flex-col mt-5 space-y-6 w-full lg:w-5/12">
            <div className="space-y-2">
              <p className="text-xl">Add more items</p>
              <Link href="/" className="underline">Continue shopping</Link>
            </div>

            {/* Items */}
            <ProductsInCart />
          </div>

          {/* Checkout */}
          <div className="bg-white rounded-xl shadow-xl p-7 space-y-4 flex-grow w-full lg:w-4/12">
            <Subtitle>
              Order summary
            </Subtitle>

            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};