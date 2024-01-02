import { OrderItem } from "./OrderItem";
import { OrderItem as IOrderItem } from "@/interfaces";

export function OrderItemsList({ items }: { items: IOrderItem[] }) {
  return (
    <div className="space-y-4">
      {
        items.map((item) => (
          <OrderItem key={`${item.product.slug} - ${item.size}`} item={item} />
        ))
      }
    </div>
  );
};