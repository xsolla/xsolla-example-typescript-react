import { createContext } from "react";

export interface IAuthContext {
  isAuthorized: boolean;
  token: string;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  isAuthorized: false,
  token: "",
  logout: () => {},
});
