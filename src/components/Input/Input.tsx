import { ReactElement, useState, forwardRef } from "react";
import { FieldErrors } from "react-hook-form";
import { useLocale } from "../../hooks";
import { Button, ErrorMessage } from "../";

import clsx from "clsx";
import styles from "./Input.module.scss";

export interface InputProps {
  inputName: "name" | "email" | "password";
  type?: "text" | "email" | "password";
  placeholder?: string;
  className?: string;
  errors: FieldErrors;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ inputName, type, placeholder, className, errors, ...restProps }, ref): ReactElement => {
    const dictionary = useLocale();

    const [hidden, setHidden] = useState(true);

    function handleClick(): void {
      setHidden(!hidden);
    }

    return (
      <div
        className={clsx(styles.field, { [styles.field__password]: type === "password" }, className)}
      >
        <label className={styles.field__label}>
          <input
            ref={ref}
            className={clsx(styles.field__input, {
              [styles.field__password_input]: type === "password",
            })}
            type={hidden && type === "password" ? "password" : "text"}
            placeholder={placeholder || (inputName && dictionary.input[inputName])}
            {...restProps}
          />
          {type === "password" && (
            <Button
              name={
                hidden ? dictionary.input.passwordButtonShow : dictionary.input.passwordButtonHide
              }
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
