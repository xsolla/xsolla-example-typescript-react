import {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AuthContext, IAuthContext } from "./AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const localStorageToken = window.localStorage.getItem("token") || "";

    const authTokenInUrl = searchParams.get("token") || "";

    setToken(localStorageToken);

    if (!localStorageToken) {
      window.localStorage.setItem("token", authTokenInUrl);
      setToken(authTokenInUrl);
    }
  }, []);

  const logout = useCallback(() => {
    const token = window.localStorage.getItem("token");

    if (!token) {
      return;
    }

    window.localStorage.removeItem("token");
    setToken("");
    navigate("/login");
  }, []);

  const value: IAuthContext = useMemo(
    () => ({
      isAuthorized: !!token,
      token: token,
      logout,
    }),
    [token, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
