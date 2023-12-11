import { ReactElement } from "react";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAppContext } from "../../hooks";
import { Page } from "../../types";
import { auth } from "../../services";
import { HOME } from "../../constants/locale";

import styles from "./HeroSection.module.scss";

function HeroSection(): ReactElement {
  const { lang } = useAppContext();
  const [user] = useAuthState(auth);

  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__title}>
          <h2 className={styles.hero__title_text}>
            {HOME[lang].heroTitle}{" "}
            <a href="" className={styles.hero__title_link}>
              The Rick and Morty API
            </a>
          </h2>
        </div>
        <div className={styles.hero__description}>
          <div className={styles.hero__description_text}>
            <p>{HOME[lang].heroPar}</p>
            {user ? (
              <Link href={Page.PLAYGROUND} className={styles.hero__description_button}>
                {HOME[lang].heroButtonPlay}
              </Link>
            ) : (
              <Link href={Page.LOGIN} className={styles.hero__description_button}>
                {HOME[lang].heroButtonLogin}
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
