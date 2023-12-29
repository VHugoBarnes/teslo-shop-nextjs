import { Title } from "@/components";
import Link from "next/link";
import React from "react";
import { IoCartOutline } from "react-icons/io5";

export default function EmptyPage() {
  return (
    <div className="flex justify-center items-center h-[800px] space-x-10 px-2 sm:px-10">
      <IoCartOutline size={80} className="" />

      <div className="flex flex-col items-center space-y-4">
        <Title>Your cart is empty</Title>

        <Link href="/" className="text-blue-500 text-4xl hover:underline transition-all duration-200">
          Go back
        </Link>
      </div>
    </div>
  );
};