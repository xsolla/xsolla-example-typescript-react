import { FC, PropsWithChildren, useEffect, useState } from "react";
import { OrderInfoContext, OrderInfo } from "./OrderInfoContext.ts";
import { useAuthContext } from "../useAuthContext";
import { Centrifuge } from "centrifuge";

export const OrderInfoContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const { token } = useAuthContext();

  const [orders, setOrders] = useState<OrderInfo>({});

  useEffect(() => {
    if (!token) {
      return;
    }

    const client = new Centrifuge(import.meta.env.VITE_WS_CONNECTION_URL, {
      data: {
        auth: token,
        project_id: Number(import.meta.env.VITE_PROJECT_ID),
      },
    });
    client.connect();

    client.on("publication", (ctx) => {
      const info = ctx.data;

      setOrders((prevState) => {
        const newState = { ...prevState };
        newState[info.order_id] = info.status;
        return newState;
      });
    });

    client.on("error", function (ctx) {
      console.error("Error:", ctx);
    });
  }, [token]);

  return (
    <OrderInfoContext.Provider value={{ orders }}>
      {children}
    </OrderInfoContext.Provider>
  );
};
