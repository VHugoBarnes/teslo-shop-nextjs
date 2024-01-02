import { getOrderById } from "@/actions/order/get-order-by-id";
import { Subtitle, Text, Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { IoCardOutline } from "react-icons/io5";
import { OrderItemsList } from "./ui/OrderItemsList";
import { notFound } from "next/navigation";
import { OrderAddress } from "./ui/OrderAddress";
import { OrderPaymentStatus } from "./ui/OrderPaymentStatus";
import { OrderSummary } from "./ui/OrderSummary";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  params: {
    id: string
  }
};

export default async function OrderPage({ params }: Props) {
  const { id } = params; // todo verify
  const orderResponse = await getOrderById(id);

  if (orderResponse.ok === false || !orderResponse.data.order) {
    notFound();
  }

  const order = orderResponse.data.order;
  const itemQuantity = orderResponse.data.order.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex justify-center items-center mb-72 px-2 sm:px-10">
      <div className="flex flex-col w-full md:w-9/12 space-y-8">
        <Title>
          Order #{id}
        </Title>

        <div className="flex flex-col lg:flex-row items-start space-y-10 space-x-0 lg:space-x-10 lg:space-y-0">
          {/* Carrito */}
          <div className="flex flex-col mt-5 space-y-6 w-full lg:w-5/12">
            <OrderPaymentStatus isPaid={order.isPaid} />

            {/* Items */}
            <OrderItemsList items={order.items} />
          </div>

          {/* Checkout */}
          <div className="bg-white rounded-xl shadow-xl p-7 space-y-4 flex-grow w-full lg:w-4/12">
            <Subtitle>
              Delivery address
            </Subtitle>

            <OrderAddress address={order.address} />

            <div className="w-full h-0.5 rounded bg-gray-200" />

            <div className="space-y-2">
              <Subtitle>
                Order summary
              </Subtitle>

              <OrderSummary quantity={itemQuantity} subtotal={order.subTotal} tax={order.tax} total={order.total} />
            </div>

            <OrderPaymentStatus isPaid={order.isPaid} />
          </div>
        </div>
      </div>
    </div>
  );
};