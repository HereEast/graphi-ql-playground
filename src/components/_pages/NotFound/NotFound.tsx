import { ReactElement } from "react";
import { useRouter } from "next/router";
import { useLocale } from "../../../hooks";
import { Page } from "../../../types";
import { Button } from "../..";

import styles from "./NotFound.module.scss";

function NotFound(): ReactElement {
  const router = useRouter();

  const { notFound } = useLocale();

  function navigateHome(): void {
    router.push(Page.HOME);
  }

  return (
    <section className={styles.notFound}>
      <div className={styles.notFound__container}>
        <span className={styles.notFound__icons}>🙁🙁🙁</span>
        <span className={styles.notFound__title}>{notFound.title}</span>
        <Button name={notFound.button} className={styles.notFound__button} onClick={navigateHome} />
      </div>
    </section>
  );
}

export default NotFound;
