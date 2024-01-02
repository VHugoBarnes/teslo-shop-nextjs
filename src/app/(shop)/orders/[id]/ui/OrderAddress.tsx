import { Text } from "@/components";
import { OrderAddress } from "@/interfaces";
import React from "react";

export function OrderAddress({ address }: { address: OrderAddress }) {
  return (
    <div>
      <Text className="font-semibold">
        {address.firstName} {address.lastName}
      </Text>
      <Text>
        {address.address}
      </Text>
      {
        address.address2 && (
          <Text>
            {address.address2}
          </Text>
        )
      }
      <Text>
        {address.city} - {address.country}
      </Text>
      <Text>CP: {address.postalCode}</Text>
      <Text>
        {address.phone}
      </Text>
    </div>
  );
};