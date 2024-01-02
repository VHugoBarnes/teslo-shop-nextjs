"use client";

import React from "react";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useAddressStore, useCartStore } from "@/store";
import { placeOrder } from "@/actions";

export function PlaceOrderSummary() {
  const router = useRouter();

  const address = useAddressStore(state => state.address);

  const totalItems = useCartStore(state => state.getTotalItems());
  const cart = useCartStore(state => state.cart);
  const priceWithoutTax = useCartStore(state => state.getPriceWithoutTax());
  const clearCart = useCartStore(state => state.clearCart);

  const [loading, setLoading] = React.useState(true);
  const [isPlacingOrder, setIsPlacingOrder] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const onPlaceOrder = async () => {
    setIsPlacingOrder(true);

    const productsToOrder = cart.map(c => ({
      productId: c.id,
      quantity: c.quantity,
      size: c.size
    }));
    const response = await placeOrder(productsToOrder, address);

    if (response.ok === false) {
      setIsPlacingOrder(false);
      let errorMess = "";
      switch (response.message) {
        case "[no-auth]":
          errorMess = "User is not authenticated";
          break;
        case "[no-product]":
          errorMess = "One of the products in the order doesn't exist";
          break;
        case "[no-products]":
          errorMess = "Please put items in your shopping cart";
          break;
        default:
          errorMess = response.message;
          break;
      }
      setErrorMessage(errorMess);
      return;
    }

    //* Everything went okay
    clearCart();
    router.replace(`/orders/${response.data?.transaction.order.id}`);
  };

  React.useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <p>Products</p>
          <div className="flex items-center space-x-1">{loading ? <p className="w-4 h-4 bg-gray-200 rounded animate-pulse"></p> : <p>{totalItems} </p>} <span>articles</span></div>
        </div>

        <div className="flex items-center justify-between">
          <p>Subtotal</p>
          <div className="flex items-center space-x-1">${loading ? <p className="w-8 h-4 bg-gray-200 rounded animate-pulse"></p> : <p>{priceWithoutTax.toFixed(2)} </p>}</div>
        </div>

        <div className="flex items-center justify-between">
          <p>Tax (15%)</p>
          <div className="flex items-center space-x-1">${loading ? <p className="w-8 h-4 bg-gray-200 rounded animate-pulse"></p> : <p>{(priceWithoutTax * 0.15).toFixed(2)} </p>}</div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xl font-semibold">Total:</p>
          <div className="flex items-center space-x-1">${loading ? <p className="w-8 h-4 bg-gray-200 rounded animate-pulse"></p> : <p>{(priceWithoutTax + (priceWithoutTax * 0.15)).toFixed(2)} </p>}</div>
        </div>
      </div>

      {/* Disclaimer & Order */}
      <div className="w-full space-y-2">
        <p>
          <span className="text-xs">
            Clicking on &quot;Order&quot; you accept our <a href="#" className="underline">terms and conditions</a> and <a href="#" className="underline">privacy policy</a>
          </span>
        </p>

        <p className="text-red-500 text-center font-semibold">{errorMessage}</p>
        <button
          onClick={() => onPlaceOrder()}
          className={clsx("flex w-full justify-center cursor-pointer", {
            "btn-primary": !isPlacingOrder,
            "bg-gray-600 text-white py-2 px-4 rounded transition-all": isPlacingOrder
          })}
          disabled={isPlacingOrder}
        >
          {
            isPlacingOrder ? "Ordering..." : "Order"
          }
        </button>
      </div>
    </>
  );
};