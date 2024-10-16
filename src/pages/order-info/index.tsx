import { Typography } from "@mui/material";
import { useOrderInfoContext } from "../../contexts/useOrderInfoContext/useOrderInfoContext.ts";
import OrderTable from "../../components/OrderTable.tsx";

const OrderInfoPage = () => {
  const { orders } = useOrderInfoContext();

  const rows = () => {
    return Object.keys(orders).map((item) => ({
      order_id: item,
      status: orders[item],
    }));
  };

  return (
    <div>
      <Typography variant="h4" align="center" paddingBottom={"30px"}>
        Order information
      </Typography>
      <OrderTable rows={rows()} />
    </div>
  );
};

export default OrderInfoPage;
