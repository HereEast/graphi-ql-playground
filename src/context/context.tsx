import React, {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";

import { DEFAULT_LANG, DEFAULT_API } from "../constants";

export interface AppContextProps {
  lang: string;
  setLang: Dispatch<React.SetStateAction<string>>;
  apiResponse: string;
  setApiResponse: Dispatch<React.SetStateAction<string>>;
  apiEndpoint: string;
  setApiEndpoint: Dispatch<React.SetStateAction<string>>;
}

export interface AppContextProviderProps {
  children: ReactNode;
}

export function AppContextProvider({ children }: AppContextProviderProps): ReactElement {
  const [lang, setLang] = useState(DEFAULT_LANG);
  const [apiResponse, setApiResponse] = useState("");
  const [apiEndpoint, setApiEndpoint] = useState(DEFAULT_API);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || DEFAULT_LANG;
    const savedApiEndpoint = localStorage.getItem("endpoint") || DEFAULT_API;

    setLang(savedLang);
    setApiEndpoint(savedApiEndpoint);
  }, []);

  return (
    <AppContext.Provider
      value={{ lang, setLang, apiResponse, setApiResponse, apiEndpoint, setApiEndpoint }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);
