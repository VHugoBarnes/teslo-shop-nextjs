import { Subtitle } from "@/components";
import type { Size } from "@/interfaces";
import clsx from "clsx";
import React from "react";

interface Props {
  selectedSize?: Size;
  availableSizes: Size[];
  onSizeChange: (size: Size) => void;
};

export function SizeSelector({ selectedSize, availableSizes, onSizeChange }: Props) {
  return (
    <div className="space-y-2">
      <Subtitle>Available sizes</Subtitle>

      <div className="flex items-center space-x-4">
        {
          availableSizes.map(size => (
            <button
              key={size}
              onClick={() => onSizeChange(size)}
              className={
                clsx("hover:underline text-lg", {
                  "underline": selectedSize === size
                })
              }
            >
              {size}
            </button>
          ))
        }
      </div>
    </div>
  );
};