import { Subtitle, Title } from "@/components";
import React from "react";
import { AddressForm } from "./ui/AddressForm";

export default function AddressPage() {
  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-2 sm:px-10">

      <div className="w-full md:w-9/12 flex flex-col justify-center text-left space-y-6">

        <Title>Address</Title>
        <Subtitle>Delivery address</Subtitle>

        <AddressForm />
      </div>

    </div>
  );
};