import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { VirtualItemType } from "../api/types.ts";
import { createPaymentsToken } from "../api/store.ts";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {
  item: VirtualItemType;
};

const VirtualItemCard = ({ item }: Props) => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleClick = async () => {
    setLoading(true);

    const data = await createPaymentsToken({
      item_sku: item.sku,
      data:
        //Testing payments
        { sandbox: true },
    });

    XPayStationWidget.init({
      access_token: data.token,
      //Testing payments
      sandbox: true,
      iframeOnly: true,
    });

    XPayStationWidget.open();

    XPayStationWidget.on(XPayStationWidget.eventTypes.CLOSE, function () {
      navigate("/order-info");

      setLoading(false);
    });
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.image_url}
          alt={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          {item.description && (
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item.description}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ marginTop: "auto" }}>
        {!!item.price && (
          <Button
            size="medium"
            color="primary"
            variant="contained"
            onClick={handleClick}
          >
            {loading ? (
              <CircularProgress size={25} color="inherit" />
            ) : (
              `${item.price?.amount} ${item.price?.currency}`
            )}
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default VirtualItemCard;
