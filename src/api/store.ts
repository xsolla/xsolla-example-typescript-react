import { api } from "./api.ts";
import {
  CreatePaymentsTokenRequest,
  CreatePaymentsTokenResponse,
  GetOrderInfoResponse,
  VirtualItemsResponse,
} from "./types.ts";

export const getVirtualItems = (): Promise<VirtualItemsResponse> => {
  const authToken = window.localStorage.getItem("token") || "";

  return api(authToken)
    .get(
      `${import.meta.env.VITE_API_BASE_URL}/v2/project/${import.meta.env.VITE_PROJECT_ID}/items`,
    )
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export const createPaymentsToken = ({
  item_sku,
  data,
}: CreatePaymentsTokenRequest): Promise<CreatePaymentsTokenResponse> => {
  const authToken = window.localStorage.getItem("token") || "";

  return api(authToken)
    .post(
      `${import.meta.env.VITE_API_BASE_URL}/v2/project/${import.meta.env.VITE_PROJECT_ID}/payment/item/${item_sku}`,
      data,
    )
    .then((res) => res.data)
    .catch((err) => console.error(err));
};

export const getOrderInfo = (
  order_id: number,
): Promise<GetOrderInfoResponse> => {
  const authToken = window.localStorage.getItem("token") || "";

  return api(authToken)
    .get(
      `${import.meta.env.VITE_API_BASE_URL}/v2/project/${import.meta.env.VITE_PROJECT_ID}/order/${order_id}`,
    )
    .then((res) => res.data)
    .catch((err) => console.error(err));
};
