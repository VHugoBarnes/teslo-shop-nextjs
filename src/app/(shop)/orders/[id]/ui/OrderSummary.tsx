import React from "react";

interface Props {
  quantity: number;
  subtotal: number;
  tax: number;
  total: number;
}

export function OrderSummary({ quantity, subtotal, tax, total }: Props) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <p>Products</p>
        <div className="flex items-center space-x-1">{quantity} articles</div>
      </div>

      <div className="flex items-center justify-between">
        <p>Subtotal</p>
        <div className="flex items-center space-x-1">${subtotal.toFixed(2)}</div>
      </div>

      <div className="flex items-center justify-between">
        <p>Tax (15%)</p>
        <div className="flex items-center space-x-1">${tax}</div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold">Total:</p>
        <div className="flex items-center space-x-1">${total}</div>
      </div>
    </div>
  );
};