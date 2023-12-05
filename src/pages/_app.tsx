import type { AppProps } from "next/app";
import { ReactElement } from "react";
import { Layout } from "../components/Layout";

import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
