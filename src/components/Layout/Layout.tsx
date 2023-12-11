import { ReactElement, ReactNode } from "react";
import { useAuthContext } from "../../hooks";
import { Header, Footer } from "../";

import clsx from "clsx";
import styles from "./Layout.module.scss";

export interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps): ReactElement {
  const { loading } = useAuthContext();

  return (
    <>
      <Header />
      <main className={clsx(loading && styles.main__loading)}>
        {loading && <span className={styles.loader}>Loading...</span>}
        {!loading && children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
