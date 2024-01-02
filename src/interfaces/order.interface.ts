export interface Order {
  createdAt: Date;
  id: string;
  isPaid: boolean;
  itemsInOrder: number;
  paidAt: null;
  subTotal: number;
  tax: number;
  total: number;
  address: OrderAddress;
  items: OrderItem[];
}

export interface OrderAddress {
  address: string;
  address2: string | null; // Cannot be "address2?" because we receive a null from database
  city: string;
  firstName: string;
  lastName: string;
  phone: string;
  postalCode: string;
  country: string;
}

export interface OrderItem {
  quantity: number;
  price: number;
  size: string;
  product: Product;
}

interface Product {
  title: string;
  price: number;
  slug: string;
  image: string;
}