import { ReactElement, useState } from "react";
import clsx from "clsx";

import { useLocale } from "../../../hooks";
import { Button, RequestEditor, ResponseEditor, Documentation, EndpointForm } from "../..";

import styles from "./Playground.module.scss";

function Playground(): ReactElement {
  const { tooltips, playground } = useLocale();

  const [docOpened, setDocOpened] = useState(false);

  function toggleDocOpened(value: boolean): void {
    setDocOpened(value);
  }

  return (
    <section className={styles.playground}>
      <div className={styles.playground__header}>
        <EndpointForm toggleDocOpened={toggleDocOpened} />

        <Button
          name={playground.docButton}
          className={clsx(
            styles.docButton,
            styles.playground__button,
            docOpened && styles.docButton_open,
          )}
          tooltip={tooltips.docs}
          onClick={() => toggleDocOpened(!docOpened)}
        />
      </div>

      <Documentation docOpened={docOpened} />

      <div className={styles.playground__views}>
        <RequestEditor />
        <ResponseEditor />
      </div>
    </section>
  );
}

export default Playground;
