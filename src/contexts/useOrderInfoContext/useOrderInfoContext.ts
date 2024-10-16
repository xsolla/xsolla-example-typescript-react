import { useContext } from "react";
import { OrderInfoContext } from "./OrderInfoContext.ts";

export const useOrderInfoContext = () => useContext(OrderInfoContext);
