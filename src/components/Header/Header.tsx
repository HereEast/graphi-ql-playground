import { ReactElement, useEffect, useState, ChangeEvent } from "react";
import Link from "next/link";
import { Page } from "../../types";
import { LANGS } from "../../utils/constants";

import classnames from "classnames";
import styles from "./header.module.scss";

function Header(): ReactElement {
  const [isScroll, setIsScroll] = useState(false);
  const [lang, setLang] = useState("");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "";
    setLang(savedLang);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  function handleSelectLang(e: ChangeEvent<HTMLSelectElement>): void {
    const selectedLang = e.target.value;

    setLang(selectedLang);
    localStorage.setItem("lang", selectedLang);
  }

  return (
    <header className={classnames(styles.header, isScroll && styles.header__blue)}>
      <nav className={styles.nav}>
        <Link href={Page.HOME} className={styles.nav__logo}></Link>
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
        <div className={styles.nav__lang}>
          <select className={styles.select} value={lang} onChange={handleSelectLang}>
            {LANGS.map((option) => (
              <option key={option} value={option}>
                {option.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </nav>
    </header>
  );
}

export default Header;
