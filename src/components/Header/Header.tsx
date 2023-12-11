import { ReactElement, useEffect, useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAppContext, useAuthContext } from "../../hooks";
import { Page } from "../../types";
import { LANGS } from "../../constants";
import { LOCALE_HEADER } from "../../constants/locale";
import { logout } from "../../services";
import { Button } from "../";

import clsx from "clsx";
import styles from "./Header.module.scss";

function Header(): ReactElement {
  const router = useRouter();

  const { lang, setLang } = useAppContext();
  const { user, loading } = useAuthContext();

  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  async function handleSignOut(): Promise<void> {
    await logout();
    closeMenu();

    router.push(Page.HOME);
  }

  function toggleMenu(): void {
    setMenuOpen(!menuOpen);
  }

  function closeMenu(): void {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }

  function closeMenuOnResize(): void {
    if (window.innerWidth > 480) {
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
    setIsScroll(window.scrollY > 0);
  }

  function handleSelectLang(e: ChangeEvent<HTMLSelectElement>): void {
    const value = e.target.value;

    setLang(value);
    localStorage.setItem("lang", value);
  }

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "";

    setLang(savedLang);
  }, [setLang]);

  useEffect(() => {
    animateHeader();

    window.addEventListener("scroll", animateHeader);
    window.addEventListener("resize", closeMenuOnResize);

    document.addEventListener("click", (e: MouseEvent) => {
      closeMenuOnDocumentClick(e);
    });

    return () => {
      window.removeEventListener("scroll", animateHeader);
      window.removeEventListener("resize", closeMenuOnResize);

      document.removeEventListener("click", (e: MouseEvent) => {
        closeMenuOnDocumentClick(e);
      });
    };
  }, []);

  return (
    <header
      className={clsx(
        styles.header,
        { [styles.scroll]: isScroll },
        { [styles.menu__open]: menuOpen },
      )}
    >
      <nav className={styles.nav}>
        <Link href={Page.HOME} className={styles.nav__logo} onClick={closeMenu}>
          <span>GraphiQL</span>
          <span className={styles.nav__logo_icon}></span>
        </Link>

        <Button
          name={LOCALE_HEADER[lang].BUTTON_MENU}
          className={styles.nav__button_menu}
          onClick={toggleMenu}
        />

        <div className={styles.menu}>
          {user && !loading && (
            <ul className={styles.menu__links}>
              <li>
                <Link href={Page.PLAYGROUND} className={styles.link} onClick={closeMenu}>
                  {LOCALE_HEADER[lang].LINK_PLAYGROUND}
                </Link>
              </li>
              <li>
                <Link href="" className={styles.link} onClick={handleSignOut}>
                  {LOCALE_HEADER[lang].LINK_SIGNOUT}
                </Link>
              </li>
            </ul>
          )}

          {!user && !loading && (
            <ul className={styles.menu__links}>
              <li>
                <Link href={Page.LOGIN} className={styles.link} onClick={closeMenu}>
                  {LOCALE_HEADER[lang].LINK_LOGIN}
                </Link>
              </li>
              <li>
                <Link href={Page.REGISTER} className={styles.link} onClick={closeMenu}>
                  {LOCALE_HEADER[lang].LINK_REGISTER}
                </Link>
              </li>
            </ul>
          )}

          {!loading && (
            <div className={styles.menu__select}>
              <select className={styles.select} value={lang} onChange={handleSelectLang}>
                {LANGS.map((option) => (
                  <option key={option} value={option}>
                    {option.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
