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
    <div className={styles.container}>
      <h1 className={styles.title}>Sorry, page was not found 🙁🙁🙁</h1>
      <Button name="Back to Home" onClick={navigateHome} />
    </div>
  );
}

export default NotFound;
