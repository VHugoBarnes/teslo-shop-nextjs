"use client";

import React from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  stock: number;
};

export function QuantitySelector({ quantity, onQuantityChange, stock }: Props) {
  const add = () => {
    if (quantity >= stock) return;
    onQuantityChange(quantity + 1);
  };

  const substract = () => {
    if (quantity <= 1) return;
    onQuantityChange(quantity - 1);
  };

  return (
    <div className="flex items-center space-x-4">
      <button onClick={() => substract()}>
        <IoRemoveCircleOutline size={30} />
      </button>

      <span className="text-neutral-800 bg-neutral-200 px-8 py-2 rounded-md">{quantity}</span>

      <button onClick={() => add()}>
        <IoAddCircleOutline size={30} />
      </button>
    </div>
  );
};