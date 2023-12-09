import { ReactElement } from "react";
import { useRouter } from "next/router";
import { Button } from "../../Button";
import { Page } from "../../../types";

import styles from "./notFound.module.scss";

function NotFound(): ReactElement {
  const router = useRouter();

  function navigateHome(): void {
    router.push(Page.HOME);
  }

  return (
    <section className={styles.notFound}>
      <div className={styles.notFound__container}>
        <span className={styles.notFound__icons}>🙁🙁🙁</span>
        <span className={styles.notFound__title}>Sorry, page was not found</span>
        <Button name="Back to Home" className={styles.notFound__button} onClick={navigateHome} />
      </div>
    </section>
  );
}

export default NotFound;
