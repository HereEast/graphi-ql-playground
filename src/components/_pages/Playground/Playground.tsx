import { ChangeEvent, ReactElement, useState } from "react";
import { Button, RequestEditor, ResponseEditor } from "../..";
import { DEFAULT_API } from "../../../constants";

import styles from "./Playground.module.scss";

function Playground(): ReactElement {
  const docsDisabled = true;

  const [value, setValue] = useState(DEFAULT_API);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value);
  }

  return (
    <section className={styles.playground}>
      <header className={styles.playground__header}>
        <form className={styles.playground__form}>
          <input
            value={value}
            onChange={handleInputChange}
            className={styles.playground__form_input}
          />
          <Button
            name="Save"
            className={(styles.playground__form_button, styles.playground__header_button)}
            type="button"
          />
        </form>

        <Button name="Doc" className={styles.playground__header_button} disabled={docsDisabled} />
      </header>

      <div className={styles.playground__views}>
        <RequestEditor />
        <ResponseEditor />
      </div>
    </section>
  );
}

export default Playground;
