import { ReactElement } from "react";
import Link from "next/link";
import { Page } from "../../types";

import styles from "./header.module.scss";

function Header(): ReactElement {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href={Page.HOME} className={styles.nav__logo}>
          GraphiQL Playground
        </Link>
        <ul className={styles.nav__links}>
          <li>
            <Link href={Page.LOGIN} className={styles.link}>
              Login
            </Link>
          </li>
          <li>
            <Link href={Page.REGISTER} className={styles.link}>
              Register
            </Link>
          </li>
        </ul>
        <div className={styles.nav__lang}>LANG</div>
      </nav>
    </header>
  );
}

export default Header;
