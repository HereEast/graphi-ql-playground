import { ReactElement, useEffect, useState, ChangeEvent } from "react";
import Link from "next/link";
import { useAppContext } from "../../hooks";
import { Button } from "../Button";
import { Page } from "../../types";
import { LANGS } from "../../utils";
import { HEADER } from "../../constants/dictionary";

import classnames from "classnames";
import styles from "./header.module.scss";

const IS_AUTH = false;

function Header(): ReactElement {
  const { lang, setLang } = useAppContext();

  const [selectedLang, setSelectedLang] = useState("");
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

    setSelectedLang(savedLang);
    setLang(savedLang);
  }, [setLang]);

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
    animateHeader();

    window.addEventListener("scroll", animateHeader);
    window.addEventListener("resize", closeMenuOnResize);

    return () => {
      window.removeEventListener("scroll", animateHeader);
      window.removeEventListener("resize", closeMenuOnResize);
    };
  }, []);

  function handleSelectLang(e: ChangeEvent<HTMLSelectElement>): void {
    const value = e.target.value;

    setSelectedLang(value);
    setLang(value);

    localStorage.setItem("lang", value);
  }

  return (
    <header
      className={classnames(
        styles.header,
        isScroll && styles.scroll,
        menuOpen && styles.menu__open,
      )}
    >
      <nav className={styles.nav}>
        <Link href={Page.HOME} className={styles.nav__logo} onClick={closeMenu}>
          <span>GraphiQL</span>
          <span className={styles.nav__logo_icon}></span>
        </Link>

        <Button
          name={HEADER[lang].BUTTON_MENU}
          className={styles.button__menu}
          onClick={toggleMenu}
        />

        <div className={styles.menu}>
          {IS_AUTH && (
            <ul className={styles.menu__links}>
              <li>
                <Link href={Page.PLAYGROUND} className={styles.link} onClick={closeMenu}>
                  {HEADER[lang].LINK_PLAYGROUND}
                </Link>
              </li>
              <li>
                <Link href="" className={styles.link} onClick={closeMenu}>
                  {HEADER[lang].LINK_SIGNOUT}
                </Link>
              </li>
            </ul>
          )}

          {!IS_AUTH && (
            <ul className={styles.menu__links}>
              <li>
                <Link href={Page.LOGIN} className={styles.link} onClick={closeMenu}>
                  {HEADER[lang].LINK_LOGIN}
                </Link>
              </li>
              <li>
                <Link href={Page.REGISTER} className={styles.link} onClick={closeMenu}>
                  {HEADER[lang].LINK_REGISTER}
                </Link>
              </li>
            </ul>
          )}

          <div className={styles.menu__lang}>
            <select className={styles.select} value={selectedLang} onChange={handleSelectLang}>
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
