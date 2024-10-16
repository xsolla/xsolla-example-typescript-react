import React, { useEffect } from "react";
import { LoginWidget } from "../../utils/login-sdk.ts";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    LoginWidget.mount("xl_auth");

    return () => LoginWidget.unmount();
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const authTokenInUrl = searchParams.get("token") || "";

    if (authTokenInUrl) {
      navigate("/");
    }
  }, []);

  return (
    <Container maxWidth="sm" id="xl_auth" sx={{ height: "500px" }}></Container>
  );
};

export default React.memo(LoginPage);
