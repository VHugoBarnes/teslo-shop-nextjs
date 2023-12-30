import { auth } from "@/auth.config";
import { redirect } from "next/navigation";
import React from "react";

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  if (session?.user) {
    redirect("/gender/kid");
  }

  return (
    <div className="flex justify-center">
      <div className="w-full md:w-9/12 lg:w-5/12 px-10">
        {children}
      </div>
    </div>
  );
};