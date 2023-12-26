import React from "react";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-red-500">
      {children}
    </div>
  );
};