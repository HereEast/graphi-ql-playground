import { ReactElement, ReactNode } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

export interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps): ReactElement {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
