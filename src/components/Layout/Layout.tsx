import { ReactElement, ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps): ReactElement {
  return (
    <>
      <p>Header</p>
      <main>{children}</main>
      <p>Footer</p>
    </>
  );
}

export default Layout;
