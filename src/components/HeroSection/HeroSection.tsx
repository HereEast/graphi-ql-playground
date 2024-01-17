import { ReactElement } from "react";
import Link from "next/link";

import { useAuthContext, useLocale } from "../../hooks";
import { Page } from "../../types";

import styles from "./HeroSection.module.scss";

function HeroSection(): ReactElement {
  const { home } = useLocale();
  const { user } = useAuthContext();

  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__title}>
          <h2 className={styles.hero__title_text}>{home.heroTitle}</h2>
        </div>

        <div className={styles.hero__description}>
          <div className={styles.hero__description_text}>
            <p>{home.heroPar}</p>
            {user ? (
              <Link href={Page.PLAYGROUND} className={styles.hero__description_button}>
                {home.heroButtonPlay}
              </Link>
            ) : (
              <Link href={Page.LOGIN} className={styles.hero__description_button}>
                {home.heroButtonLogin}
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
