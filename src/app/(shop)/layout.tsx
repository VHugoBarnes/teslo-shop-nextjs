import { TopMenu } from "@/components";
import React from "react";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <TopMenu />
      <section className="px-0 md:px-10 py-10">
        {children}
      </section>
    </div>
  );
};