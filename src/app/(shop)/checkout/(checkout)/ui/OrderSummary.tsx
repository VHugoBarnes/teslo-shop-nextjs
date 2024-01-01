"use client";

import { Subtitle } from "@/components";
import { useCartStore } from "@/store";
import Link from "next/link";
import React from "react";

export function OrderSummary() {
  const totalItems = useCartStore(state => state.getTotalItems());
  const priceWithoutTax = useCartStore(state => state.getPriceWithoutTax());
  const [loading, setLoading] = React.useState(true);

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
    </>
  );
};