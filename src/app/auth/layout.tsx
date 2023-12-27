import React from "react";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <div className="w-full md:w-9/12 lg:w-5/12 px-10">
        {children}
      </div>
    </div>
  );
};