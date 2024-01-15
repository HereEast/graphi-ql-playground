import { ChangeEvent, ReactElement, useState } from "react";
import clsx from "clsx";

import { useAppContext, useLocale } from "../../hooks";
import { PLACEHOLDER_API } from "../../constants";
import { Button } from "..";

import styles from "./EndpointForm.module.scss";

interface EndpointFormProps {
  toggleDocOpened: (value: boolean) => void;
}

function EndpointForm({ toggleDocOpened }: EndpointFormProps): ReactElement {
  const { apiEndpoint, setApiEndpoint } = useAppContext();
  const { playground } = useLocale();

  const [value, setValue] = useState(apiEndpoint);

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
    <form className={styles.form}>
      <input
        value={value}
        onChange={handleInputChange}
        onClick={() => toggleDocOpened(false)}
        onBlur={saveEndpoint}
        className={styles.form__input}
        placeholder={PLACEHOLDER_API}
      />
      <Button
        name={playground.saveButton}
        className={clsx(styles.saveButton, styles.form__button)}
        type="button"
      />
    </form>
  );
}

export default EndpointForm;
