import { ReactElement, useEffect, useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAppContext } from "../../hooks";
import { Button } from "../Button";
import { Page } from "../../types";
import { LANGS } from "../../utils";
import { HEADER } from "../../constants/dictionary";

import { auth, logout } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import classnames from "classnames";
import styles from "./header.module.scss";

function Header(): ReactElement {
  const router = useRouter();

  const { lang, setLang } = useAppContext();

  // Handle loading and error
  const [user] = useAuthState(auth);

  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  async function handleSignOut(): Promise<void> {
    await logout();
    closeMenu();

    router.push(Page.HOME);
  }

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
          {user && (
            <ul className={styles.menu__links}>
              <li>
                <Link href={Page.PLAYGROUND} className={styles.link} onClick={closeMenu}>
                  {HEADER[lang].LINK_PLAYGROUND}
                </Link>
              </li>
              <li>
                <Link href="" className={styles.link} onClick={handleSignOut}>
                  {HEADER[lang].LINK_SIGNOUT}
                </Link>
              </li>
            </ul>
          )}

          {!user && (
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
