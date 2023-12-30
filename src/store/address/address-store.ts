import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  address: {
    firstName: string;
    lastName: string;
    address: string;
    address2?: string;
    postalcode: string;
    city: string;
    country: string;
    phone: string;
  },

  setAddress: (addres: State["address"]) => void
};

export const useAddressStore = create<State>()(
  persist(
    (set, get) => ({
      address: {
        address: "",
        address2: "",
        city: "",
        country: "",
        firstName: "",
        lastName: "",
        phone: "",
        postalcode: "",
      },
      setAddress: (address) => {
        set({ address });
      }
    }),
    {
      name: "address-storage"
    }
  )
);