import { useContext } from "react";
import { AppContext, AppContextProps } from "../context";

export function useAppContext(): AppContextProps {
  const context = useContext(AppContext);

  if (!context) {
    throw Error("Context error.");
  }

  return context;
}
