import React, {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";

export interface AppContextProps {
  lang: string;
  setLang: Dispatch<React.SetStateAction<string>>;
  apiResponse: string;
  setApiResponse: Dispatch<React.SetStateAction<string>>;
}

export interface AppContextProviderProps {
  children: ReactNode;
}

export function AppContextProvider({ children }: AppContextProviderProps): ReactElement {
  const [lang, setLang] = useState("en");
  const [apiResponse, setApiResponse] = useState("");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "en";
    setLang(savedLang);
  }, []);

  return (
    <AppContext.Provider value={{ lang, setLang, apiResponse, setApiResponse }}>
      {children}
    </AppContext.Provider>
  );
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);
