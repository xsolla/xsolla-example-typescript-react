import { createContext } from "react";
import { OrderStatus } from "../../api/types.ts";

export type OrderData = {
  order_id: string;
  status: OrderStatus;
};

export type OrderInfo = Record<string, OrderStatus>;

export type OrderInfoContext = {
  orders: OrderInfo;
};

export const OrderInfoContext = createContext<OrderInfoContext>({
  orders: {},
});
