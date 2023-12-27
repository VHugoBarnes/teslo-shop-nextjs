import { titleFont } from "@/config/fonts";
import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <div className="flex w-full justify-center text-xs mb-10 space-x-3">
      <Link href="/" className="">
        <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
        <span>| shop</span>
        <span>&#169; {new Date().getFullYear()}</span>
      </Link>

      <span>-</span>

      <Link href="/">
        Privacy & Legal
      </Link>

      <span>-</span>

      <Link href="/">
        Locations
      </Link>
    </div>
  );
};