import type { AppProps } from "next/app";
import { ReactElement } from "react";
import { Layout } from "../components/Layout";
import { AppContextProvider } from "../context";

import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}
