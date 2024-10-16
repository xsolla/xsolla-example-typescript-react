import { Container, Alert, Typography, CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { getVirtualItems } from "../../api/store.ts";
import { VirtualItemType } from "../../api/types.ts";
import { useAuthContext } from "../../contexts/useAuthContext";
import VirtualItemCard from "../../components/VirtualItemCard.tsx";

const MainPage = () => {
  const { isAuthorized } = useAuthContext();
  const [virtualItems, setVirtualItems] = useState<VirtualItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getVirtualItems().then((result) => {
      setVirtualItems(result.items);
      setLoading(false);
    });
  }, []);

  if (!isAuthorized) {
    return (
      <Container maxWidth="sm" sx={{ paddingTop: "30px" }}>
        <Alert severity="info">
          To see Virtual Items, please log in to your account
        </Alert>
      </Container>
    );
  }

  return (
    <>
      <Typography variant="h4" align="center" paddingBottom={"30px"}>
        Virtual Items
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        {loading ? (
          <Container maxWidth="sm" sx={{ textAlign: "center" }}>
            <CircularProgress size={30} color="primary" />
          </Container>
        ) : (
          <Grid container spacing={3}>
            {virtualItems.map((item) => (
              <Grid key={item.item_id} size={3}>
                <VirtualItemCard item={item} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};

export default MainPage;
