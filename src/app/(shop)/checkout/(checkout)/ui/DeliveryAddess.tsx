"use client";

import { Text } from "@/components";
import { useAddressStore } from "@/store";
import React from "react";

export function DeliveryAddess() {
  const storeUserAddress = useAddressStore(state => state.address);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="w-full h-28 rounded bg-gray-200 animate-pulse" />
    );
  }

  return (
    <div>
      <Text className="font-semibold">
        {storeUserAddress.firstName} {storeUserAddress.lastName}
      </Text>
      <Text>
        {storeUserAddress.address}
      </Text>
      {
        storeUserAddress.address2 && (
          <Text>
            {storeUserAddress.address2}
          </Text>
        )
      }
      <Text>
        {storeUserAddress.city} - {storeUserAddress.country}
      </Text>
      <Text>CP: {storeUserAddress.postalCode}</Text>
      <Text>
        {storeUserAddress.phone}
      </Text>
    </div>
  );
};