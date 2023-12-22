import { ReactElement } from "react";
import { RequestEditor, ResponseEditor } from "../..";

import styles from "./Playground.module.scss";

function Playground(): ReactElement {
  return (
    <section className={styles.playground}>
      <h1>Playground</h1>
      <div className={styles.playground__views}>
        <RequestEditor />
        <ResponseEditor />
      </div>
    </section>
  );
}

export default Playground;
