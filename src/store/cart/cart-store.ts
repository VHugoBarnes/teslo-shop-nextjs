import { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Cart {
  cart: CartProduct[];
  getTotalItems: () => number;
  getPriceWithoutTax: () => number;
  addProductToCart: (product: CartProduct) => void;
  updateProductQuantity: (product: CartProduct) => void;
  removeProduct: (product: CartProduct) => void;
  clearCart: () => void;
};

export const useCartStore = create<Cart>()(
  persist(
    (set, get) => ({
      cart: [],
      getTotalItems: (): number => {
        const { cart } = get();

        return cart.reduce((acc, curr) => {
          return acc + curr.quantity;
        }, 0);
      },
      getPriceWithoutTax: () => {
        const { cart } = get();

        return cart.reduce((acc, curr) => {
          return acc + (curr.price * curr.quantity);
        }, 0);
      },
      updateProductQuantity: (product: CartProduct) => {
        const { cart } = get();
        const productInCart = cart.some((item) => item.id === product.id && item.size === product.size);

        if (!productInCart) return;

        const updatedCartProducts = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return {
              ...product,
            };
          } else {
            return item;
          }
        });

        set({ cart: updatedCartProducts });
      },
      removeProduct: (product: CartProduct) => {
        const { cart } = get();
        const updatedCartProducts = cart.filter((item) => (!(item.id === product.id && item.size === product.size)));

        set({ cart: updatedCartProducts });
      },
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
      clearCart: () => {
        set({ cart: [] });
      }
    }),
    {
      name: "shopping-cart"
    }
  )
);