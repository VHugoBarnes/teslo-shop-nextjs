"use client";

import React from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
};

export function QuantitySelector({ quantity }: Props) {
  const [count, setCount] = React.useState<number>(quantity);

  const add = () => {
    if (count >= 99) return;
    setCount(prev => prev + 1);
  };

  const substract = () => {
    if (count <= 0) return;
    setCount(prev => prev - 1);
  };

  return (
    <div className="flex items-center space-x-4">
      <button onClick={() => substract()}>
        <IoRemoveCircleOutline size={30} />
      </button>

      <span className="text-neutral-800 bg-neutral-200 px-8 py-2 rounded-md">{count}</span>

      <button onClick={() => add()}>
        <IoAddCircleOutline size={30} />
      </button>
    </div>
  );
};