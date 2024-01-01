import { Subtitle, Title } from "@/components";
import Link from "next/link";
import React from "react";
import { ProductsInCart } from "./ui/ProductsInCart";
import { PlaceOrderSummary } from "./ui/PlaceOrderSummary";
import { DeliveryAddess } from "./ui/DeliveryAddess";

export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-2 sm:px-10">
      <div className="flex flex-col w-full md:w-9/12">
        <Title>
          Verify order
        </Title>

        <div className="flex flex-col lg:flex-row items-start space-y-10 space-x-0 lg:space-x-10 lg:space-y-0">
          {/* Carrito */}
          <div className="flex flex-col mt-5 space-y-6 w-full lg:w-5/12">
            <span className="text-xl">Adjust elements</span>
            <Link href="/cart" className="underline">Edit cart</Link>

            {/* Items */}
            <ProductsInCart />
          </div>

          {/* Checkout */}
          <div className="bg-white rounded-xl shadow-xl p-7 space-y-4 flex-grow w-full lg:w-4/12">
            <div className="space-y-2">
              <Subtitle>
                Delivery address
              </Subtitle>

              <DeliveryAddess />
            </div>

            <div className="w-full h-0.5 rounded bg-gray-200" />

            <div className="space-y-2">
              <Subtitle>
                Order summary
              </Subtitle>

              <PlaceOrderSummary />
            </div>

            <div className="w-full space-y-2">
              {/* Disclaimer */}
              <p>
                <span className="text-xs">
                  Clicking on &quot;Order&quot; you accept our <a href="#" className="underline">terms and conditions</a> and <a href="#" className="underline">privacy policy</a>
                </span>
              </p>

              <button className="flex w-full btn-primary justify-center">
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};