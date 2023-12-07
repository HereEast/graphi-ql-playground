import { ReactElement } from "react";

import classnames from "classnames";
import styles from "./input.module.scss";

export interface InputProps {
  inputName: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  className?: string;
  isDisabled?: boolean;
}

function Input({ inputName, type, placeholder, className, isDisabled }: InputProps): ReactElement {
  return (
    <div className={classnames(styles.field, className || "")}>
      <label className={styles.field__label}>
        <input
          name={inputName}
          type={type || "text"}
          placeholder={placeholder || inputName}
          className={styles.field__input}
          disabled={isDisabled}
        />
      </label>
    </div>
  );
}

export default Input;
