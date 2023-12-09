import React, { createContext, Dispatch, ReactElement, ReactNode, useState } from "react";

export interface AppContextProps {
  lang: string;
  setLang: Dispatch<React.SetStateAction<string>>;
}

export interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export function AppContextProvider({ children }: AppContextProviderProps): ReactElement {
  // const savedLang = localStorage.getItem("lang");
  const [lang, setLang] = useState("en");

  return <AppContext.Provider value={{ lang, setLang }}>{children}</AppContext.Provider>;
}
