export type VirtualItemType = {
  item_id: number;
  sku: string;
  name: string;
  description?: string;
  image_url: string;
  price: { amount: string; currency: string };
};

export type VirtualItemsResponse = {
  has_more: boolean;
  items: VirtualItemType[];
};

export type CreatePaymentsTokenRequest = {
  item_sku: string;
  data: { sandbox: boolean };
};

export type CreatePaymentsTokenResponse = {
  token: string;
  order_id: number;
};

export type OrderStatus = "new" | "paid" | "done" | "canceled";

type Price = {
  amount: string;
  amount_without_discount: string;
  currency: string;
};

export type GetOrderInfoResponse = {
  content: {
    is_free: boolean;
    items: [
      {
        is_free: boolean;
        price: Price;
        quantity: number;
        sku: string;
      },
    ];
    price: Price;
  };
  order_id: number;
  status: OrderStatus;
};
