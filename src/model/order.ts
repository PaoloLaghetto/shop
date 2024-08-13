import { CartItem } from "./cart-item.ts";
import { OrderStatus, OrderUser } from "./order-form.ts";

export interface Order {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  order: CartItem[];
  status: OrderStatus;
  total: number;
  updated: string;
  user: OrderUser;
}
