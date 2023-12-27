import { Footer, Sidebar, TopMenu } from "@/components";
import React from "react";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <TopMenu />
      <Sidebar />
      <section className="px-2 md:px-10 py-10">
        {children}
      </section>
      <Footer />
    </div>
  );
};