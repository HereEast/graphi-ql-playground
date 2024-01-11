import { ChangeEvent, ReactElement, useState } from "react";

import { useAppContext, useLocale } from "../../../hooks";
import { PLACEHOLDER_API } from "../../../constants";
import { Button, RequestEditor, ResponseEditor, Doc } from "../..";

import styles from "./Playground.module.scss";

function Playground(): ReactElement {
  const { apiEndpoint, setApiEndpoint } = useAppContext();
  const { tooltips, playground } = useLocale();

  const [value, setValue] = useState(apiEndpoint);
  const [docOpened, setDocOpened] = useState(false);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value);
  }

  function saveEndpoint(): void {
    if (apiEndpoint !== value) {
      setApiEndpoint(value);
      localStorage.setItem("endpoint", value);
    }
  }

  return (
    <section className={styles.playground}>
      <header className={styles.playground__header}>
        <form className={styles.playground__form}>
          <input
            value={value}
            onChange={handleInputChange}
            onClick={() => setDocOpened(false)}
            onBlur={saveEndpoint}
            className={styles.playground__form_input}
            placeholder={PLACEHOLDER_API}
          />
          <Button
            name={playground.saveButton}
            className={(styles.playground__form_button, styles.playground__header_button)}
            type="button"
          />
        </form>

        <Button
          name={playground.docButton}
          className={styles.playground__header_button}
          tooltip={tooltips.docs}
          onClick={() => setDocOpened(!docOpened)}
        />
      </header>

      <Doc docOpened={docOpened} />

      <div className={styles.playground__views}>
        <RequestEditor />
        <ResponseEditor />
      </div>
    </section>
  );
}

export default Playground;
