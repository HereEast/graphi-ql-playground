import { ReactElement, ReactNode } from "react";
import clsx from "clsx";

import { useAuthContext, useLocale } from "../../hooks";
import { Header, Footer } from "../";

import styles from "./Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps): ReactElement {
  const { loading } = useAuthContext();
  const { loader } = useLocale();

  return (
    <>
      <Header />
      <main className={clsx(loading && styles.main__loading)}>
        {loading ? <span className={styles.loader}>{loader}</span> : children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
