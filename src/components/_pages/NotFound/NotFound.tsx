import { ReactElement } from "react";
import Link from "next/link";
import { useLocale } from "../../../hooks";
import { Page } from "../../../types";

import styles from "./NotFound.module.scss";

function NotFound(): ReactElement {
  const { notFound } = useLocale();

  return (
    <section className={styles.notFound}>
      <div className={styles.notFound__container}>
        <span className={styles.notFound__icons}>🙁🙁🙁</span>
        <span className={styles.notFound__title}>{notFound.title}</span>

        <Link href={Page.HOME} className={styles.notFound__link}>
          {notFound.button}
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
