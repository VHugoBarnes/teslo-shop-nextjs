import clsx from "clsx";
import React from "react";
import { IoCardOutline } from "react-icons/io5";

export function OrderPaymentStatus({ isPaid }: { isPaid: boolean }) {
  return (
    <div className={
      clsx("flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5 space-x-2",
        {
          "bg-red-500": !isPaid,
          "bg-green-700": isPaid
        }
      )
    }>
      <IoCardOutline size={30} />
      <span className="">{isPaid ? "Payed" : "Not payed"}</span>
    </div>
  );
};