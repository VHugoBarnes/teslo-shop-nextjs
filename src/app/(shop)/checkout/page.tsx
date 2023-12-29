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

export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-2 sm:px-10">
      <div className="flex flex-col w-full md:w-9/12">
        <Title>
          Verify order
        </Title>

        <div className="flex flex-col md:flex-row items-start space-y-8 space-x-0 md:space-x-10 md:space-y-0">
          {/* Carrito */}
          <div className="flex flex-col mt-5 space-y-5">
            <span className="text-xl">Adjust elements</span>
            <Link href="/cart" className="underline">Edit cart</Link>

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
                      <Text>${product.price} x 3</Text>
                      <p className="font-bold">Subtotal: ${product.price * 3}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>

          {/* Checkout */}
          <div className="bg-white rounded-xl shadow-xl p-7 space-y-8 flex-grow">
            <div className="space-y-2">
              <Subtitle>
                Delivery address
              </Subtitle>

              <div>
                <Text className="font-semibold">
                  Victor Vazquez
                </Text>
                <Text>Evergreen Ave 123</Text>
                <Text>Col. Centro</Text>
                <Text>Alcaldia Cuauhtemoc</Text>
                <Text>Ciudad de Mexico</Text>
                <Text>CP: 87470</Text>
                <Text>123.123.1234</Text>
              </div>
            </div>

            <div className="w-full h-0.5 rounded bg-gray-200" />

            <div className="space-y-2">
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
            </div>

            <div className="w-full space-y-2">
              {/* Disclaimer */}
              <p>
                <span className="text-xs">
                  Clicking on &quot;Order&quot; you accept our <a href="#" className="underline">terms and conditions</a> and <a href="#" className="underline">privacy policy</a>
                </span>
              </p>

              <Link href="/orders/123" className="flex btn-primary justify-center">
                Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};