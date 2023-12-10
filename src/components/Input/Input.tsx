import { ReactElement, useState, forwardRef } from "react";
import { useAppContext } from "../../hooks";
import { FieldErrors } from "react-hook-form";
import { ErrorMessage } from "../ErrorMessage";
import { Button } from "../Button";
import { INPUT } from "../../constants/dictionary";

import classnames from "classnames";
import styles from "./input.module.scss";

export interface InputProps {
  inputName: "email" | "password" | "name";
  type?: "text" | "email" | "password";
  placeholder?: string;
  className?: string;
  errors: FieldErrors;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ inputName, type, placeholder, className, errors, ...restProps }, ref): ReactElement => {
    const { lang } = useAppContext();
    const [hidden, setHidden] = useState(true);

    function handleClick(): void {
      setHidden(!hidden);
    }

    return (
      <div
        className={classnames(
          styles.field,
          type === "password" && styles.field__password,
          className || "",
        )}
      >
        <label className={styles.field__label}>
          <input
            ref={ref}
            className={styles.field__input}
            type={hidden ? "password" : "text"}
            placeholder={placeholder || (inputName && INPUT[lang][inputName])}
            {...restProps}
          />
          {type === "password" && (
            <Button
              name={hidden ? INPUT[lang].passwordButtonShow : INPUT[lang].passwordButtonHide}
              className={styles.field__password_button}
              onClick={handleClick}
            />
          )}
        </label>

        {errors[inputName] && <ErrorMessage message={errors[inputName]?.message as string} />}
      </div>
    );
  },
);

export default Input;
