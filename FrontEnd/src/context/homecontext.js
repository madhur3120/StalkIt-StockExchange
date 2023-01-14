import { createContext } from "react";

export const HomeContext = createContext({
  LoggedIn: false,
  userNumber: 0,
  ologin: () => {},
  ologout: () => {},
});
