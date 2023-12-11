import { ReactElement } from "react";
import Link from "next/link";
import { useAppContext, useAuthContext } from "../../hooks";
import { Page } from "../../types";
import { LOCALE_HOME } from "../../constants/locale";

import styles from "./HeroSection.module.scss";

function HeroSection(): ReactElement {
  const { lang } = useAppContext();
  const { user } = useAuthContext();

  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__title}>
          <h2 className={styles.hero__title_text}>
            {LOCALE_HOME[lang].heroTitle}{" "}
            <a href="" className={styles.hero__title_link}>
              The Rick and Morty API
            </a>
          </h2>
        </div>

        <div className={styles.hero__description}>
          <div className={styles.hero__description_text}>
            <p>{LOCALE_HOME[lang].heroPar}</p>
            {user ? (
              <Link href={Page.PLAYGROUND} className={styles.hero__description_button}>
                {LOCALE_HOME[lang].heroButtonPlay}
              </Link>
            ) : (
              <Link href={Page.LOGIN} className={styles.hero__description_button}>
                {LOCALE_HOME[lang].heroButtonLogin}
              </Link>
            )}
          </div>
          <div className={styles.hero__description_image}></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
