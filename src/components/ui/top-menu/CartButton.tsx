"use client";

import { useCartStore } from "@/store";
import Link from "next/link";
import React from "react";
import { IoCartOutline } from "react-icons/io5";

export function CartButton() {
  const [loading, setLoading] = React.useState(true);
  const getTotalItems = useCartStore(state => state.getTotalItems());

  React.useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Link href="/cart" className="relative">
      {
        loading
          ? (
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white animate-pulse w-4 h-4"></span>
          )
          : (
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">{getTotalItems}</span>
          )
      }
      <IoCartOutline className="w-5 h-5" />
    </Link>
  );
};