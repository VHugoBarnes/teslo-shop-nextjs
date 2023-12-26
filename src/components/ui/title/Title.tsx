import { titleFont } from "@/config/fonts";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
};

export function Title({ children, className }: Props) {
  return (
    <h1 className={`${titleFont.className} antialiased text-4xl font-semibold ${className}`}>
      {children}
    </h1>
  );
};