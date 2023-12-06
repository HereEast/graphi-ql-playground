import { ReactElement, useEffect, useState, ChangeEvent } from "react";
import Link from "next/link";
import { Button } from "../Button";
import { Page } from "../../types";
import { LANGS, IS_AUTH } from "../../utils/constants";

import classnames from "classnames";
import styles from "./header.module.scss";

function Header(): ReactElement {
  const [lang, setLang] = useState("");
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenuOnResize(): void {
    if (window.innerWidth > 480) {
      setMenuOpen(false);
    }
  }

  function toggleMenu(): void {
    setMenuOpen(!menuOpen);
  }

  function closeMenu(): void {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }

  function closeMenuOnDocumentClick(e: MouseEvent): void {
    const isHeader = (e.target instanceof HTMLElement && e.target?.closest("header")) || false;

    if (!isHeader) {
      setMenuOpen(false);
    }
  }

  function animateHeader(): void {
    if (window.scrollY > 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "";
    setLang(savedLang);
  }, []);

  useEffect(() => {
    document.addEventListener("click", (e: MouseEvent) => {
      closeMenuOnDocumentClick(e);
    });

    return () => {
      document.removeEventListener("click", (e: MouseEvent) => {
        closeMenuOnDocumentClick(e);
      });
    };
  }, []);

  useEffect(() => {
    if (window.scrollY > 0) {
      setIsScroll(true);
    }

    if (window.innerWidth > 480) {
      setMenuOpen(false);
    }

    window.addEventListener("scroll", animateHeader);
    window.addEventListener("resize", closeMenuOnResize);

    return () => {
      window.removeEventListener("scroll", animateHeader);
      window.removeEventListener("resize", closeMenuOnResize);
    };
  }, []);

  function handleSelectLang(e: ChangeEvent<HTMLSelectElement>): void {
    const selectedLang = e.target.value;

    setLang(selectedLang);
    localStorage.setItem("lang", selectedLang);
  }

  return (
    <header className={classnames(styles.header, isScroll && styles.header__scroll)}>
      <nav className={styles.nav}>
        <Link href={Page.HOME} className={styles.nav__logo} onClick={closeMenu}>
          <span>GraphiQL</span>
          <span
            className={classnames(styles.nav__logo_icon, isScroll ? styles.icon__scroll : "")}
          ></span>
        </Link>

        <Button name="Menu" className={styles.button__menu} onClick={toggleMenu} />

        <div className={classnames(styles.menu, menuOpen ? styles.menu__open : "")}>
          {IS_AUTH && (
            <ul className={styles.menu__links}>
              <li>
                <Link href={Page.PLAYGROUND} className={styles.link} onClick={closeMenu}>
                  Playground
                </Link>
              </li>
              <li>
                <Link href="" className={styles.link} onClick={closeMenu}>
                  Sign Out
                </Link>
              </li>
            </ul>
          )}

          {!IS_AUTH && (
            <ul className={styles.menu__links}>
              <li>
                <Link href={Page.LOGIN} className={styles.link} onClick={closeMenu}>
                  Login
                </Link>
              </li>
              <li>
                <Link href={Page.REGISTER} className={styles.link} onClick={closeMenu}>
                  Register
                </Link>
              </li>
            </ul>
          )}

          <div className={styles.menu__lang}>
            <select className={styles.select} value={lang} onChange={handleSelectLang}>
              {LANGS.map((option) => (
                <option key={option} value={option}>
                  {option.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
