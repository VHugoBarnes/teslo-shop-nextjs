import { CartProduct } from "@/interfaces";
import { create } from "zustand";

interface Cart {
  cart: CartProduct[];
  addProductToCart: (product: CartProduct) => void;
  // updateProductQuantity;
  // removeProduct;
};

export const useCartStore = create<Cart>()((set, get) => ({
  cart: [],
  addProductToCart: (product: CartProduct) => {
    const { cart } = get();

    const productInCart = cart.some((item) => item.id === product.id && item.size === product.size);

    if (!productInCart) {
      set({ cart: [...cart, product] });
      return;
    }

    const updatedCartProducts = cart.map((item) => {
      if (item.id === product.id && item.size === product.size) {
        return {
          ...item,
          quantity: item.quantity + product.quantity
        };
      } else {
        return item;
      }
    });

    set({ cart: updatedCartProducts });
  },
}));