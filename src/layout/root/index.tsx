import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import ButtonAppBar from "../../components/ButtonAppBar.tsx";
import { OrderInfoContextProvider } from "../../contexts/useOrderInfoContext/OrderInfoContextProvider.tsx";
import { AuthContextProvider } from "../../contexts/useAuthContext";

const Root = () => {
  return (
    <AuthContextProvider>
      <OrderInfoContextProvider>
        <Box sx={{ bgcolor: "#cfe8fc", minHeight: "100vh" }}>
          <ButtonAppBar />
          <Container maxWidth="lg" sx={{ padding: "30px" }}>
            <Outlet />
          </Container>
        </Box>
      </OrderInfoContextProvider>
    </AuthContextProvider>
  );
};

export default Root;
