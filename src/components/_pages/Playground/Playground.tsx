import { ChangeEvent, ReactElement, useState } from "react";

import { useAppContext } from "../../../hooks";
import { Button, RequestEditor, ResponseEditor } from "../..";

import styles from "./Playground.module.scss";

function Playground(): ReactElement {
  const docsDisabled = true;

  const { apiEndpoint, setApiEndpoint } = useAppContext();

  const [value, setValue] = useState(apiEndpoint);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value);
    // localStorage.setItem("endpoint", e.target.value);
  }

  function saveEndpoint(): void {
    if (apiEndpoint !== value) {
      setApiEndpoint(value);
    }
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
            onClick={saveEndpoint}
            className={(styles.playground__form_button, styles.playground__header_button)}
            type="button"
          />
        </form>

        <Button
          name="Doc"
          className={styles.playground__header_button}
          disabled={docsDisabled}
          onClick={() => {}}
        />
      </header>

      <div className={styles.playground__views}>
        <RequestEditor />
        <ResponseEditor />
      </div>
    </section>
  );
}

export default Playground;
