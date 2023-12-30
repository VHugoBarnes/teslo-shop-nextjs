import { Subtitle, Title } from "@/components";
import React from "react";
import { AddressForm } from "./ui/AddressForm";
import { getCountries, getUserAddress } from "@/actions";
import { auth } from "@/auth.config";

export default async function AddressPage() {
  const session = await auth();
  const { data } = await getCountries();

  if (!session?.user) {
    return (
      <h3 className="text-5xl">500 -  No user session</h3>
    );
  }

  const { data: { address } } = await getUserAddress(session.user.id);

  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-2 sm:px-10">

      <div className="w-full md:w-9/12 flex flex-col justify-center text-left space-y-6">

        <Title>Address</Title>
        <Subtitle>Delivery address</Subtitle>

        <AddressForm countries={data?.countries} storedAddress={address ?? undefined} />
      </div>

    </div>
  );
};