import { ReactElement } from "react";
import { useRouter } from "next/router";
import { useAppContext } from "../../../hooks";
import { Button } from "../../Button";
import { Page } from "../../../types";
import { NOT_FOUND } from "../../../constants/dictionary";

import styles from "./notFound.module.scss";

function NotFound(): ReactElement {
  const router = useRouter();
  const { lang } = useAppContext();

  function navigateHome(): void {
    router.push(Page.HOME);
  }

  return (
    <section className={styles.notFound}>
      <div className={styles.notFound__container}>
        <span className={styles.notFound__icons}>🙁🙁🙁</span>
        <span className={styles.notFound__title}>{NOT_FOUND[lang].title}</span>
        <Button
          name={NOT_FOUND[lang].button}
          className={styles.notFound__button}
          onClick={navigateHome}
        />
      </div>
    </section>
  );
}

export default NotFound;
