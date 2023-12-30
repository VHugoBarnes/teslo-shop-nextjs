import { Subtitle, Title } from "@/components";
import React from "react";
import { AddressForm } from "./ui/AddressForm";
import { getCountries } from "@/actions";

export default async function AddressPage() {
  const { data } = await getCountries();

  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-2 sm:px-10">

      <div className="w-full md:w-9/12 flex flex-col justify-center text-left space-y-6">

        <Title>Address</Title>
        <Subtitle>Delivery address</Subtitle>

        <AddressForm countries={data?.countries} />
      </div>

    </div>
  );
};