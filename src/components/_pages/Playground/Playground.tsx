import { ReactElement } from "react";
import { RequestView, ResponseView } from "../..";

import styles from "./Playground.module.scss";

function Playground(): ReactElement {
  return (
    <section className={styles.playground}>
      <h1>Playground</h1>
      <div className={styles.playground__views}>
        <RequestView />
        <ResponseView />
      </div>
    </section>
  );
}

export default Playground;
