import { titleFont } from "@/config/fonts";
import React from "react";

export function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className={`${titleFont.className} antialiased text-4xl font-semibold`}>
      {children}
    </h1>
  );
};