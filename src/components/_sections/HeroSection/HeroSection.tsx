import { ReactElement } from "react";
import Link from "next/link";
import { useAppContext } from "../../../hooks";
import { Page } from "../../../types";
import { HOME } from "../../../constants/dictionary";

import { auth } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import styles from "./heroSection.module.scss";

function HeroSection(): ReactElement {
  const { lang } = useAppContext();
  const [user] = useAuthState(auth);

  return (
    <>
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
          <div className={styles.hero__info}>
            <div className={styles.hero__info_text}>
              <p>{HOME[lang].heroPar}</p>
              {user ? (
                <Link href={Page.PLAYGROUND} className={styles.hero__info_button}>
                  {HOME[lang].heroButtonPlay}
                </Link>
              ) : (
                <Link href={Page.LOGIN} className={styles.hero__info_button}>
                  {HOME[lang].heroButtonLogin}
                </Link>
              )}
            </div>
            <div className={styles.hero__info_image}></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
