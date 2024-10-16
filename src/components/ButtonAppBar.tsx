import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/useAuthContext";

export default function ButtonAppBar() {
  const { isAuthorized, logout } = useAuthContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ width: "100%", display: "flex", gap: "50px" }}>
            <Typography variant="h6" component="div">
              <Link to="/">All Items</Link>
            </Typography>
            <Typography variant="h6" component="div">
              <Link to="/order-info">Order info</Link>
            </Typography>
          </Box>

          {isAuthorized ? (
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button color="inherit">Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
