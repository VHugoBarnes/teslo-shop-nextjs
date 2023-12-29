import { auth } from "@/auth.config";
import { Text, Title } from "@/components";
import { redirect } from "next/navigation";
import React from "react";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    // redirect("/auth/login?next=/profile");
    redirect("/");
  }

  return (
    <div className="space-y-4 px-2 sm:px-10">
      <Title>Profile</Title>
      <Text>
        {JSON.stringify(session?.user, null, 2)}
      </Text>
    </div>
  );
};