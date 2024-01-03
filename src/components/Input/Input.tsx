import { ReactElement, useState, forwardRef } from "react";
import { FieldErrors } from "react-hook-form";
import clsx from "clsx";
import { useLocale } from "../../hooks";
import { Button, ErrorMessage } from "../";

import styles from "./Input.module.scss";

interface InputProps {
  inputName: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  className?: string;
  errors: FieldErrors;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref): ReactElement => {
  const { inputName, type, placeholder, className, errors, ...restProps } = props;
  const { input } = useLocale();

  const [hidden, setHidden] = useState(true);

  const inputPlaceholder = placeholder || inputName[0].toUpperCase() + inputName.slice(1);
  const inputType = hidden && type === "password" ? "password" : "text";

  function handleClick(): void {
    setHidden(!hidden);
  }

  return (
    <div
      className={clsx(styles.field, { [styles.field__password]: type === "password" }, className)}
    >
      <label className={styles.field__label}>
        <input
          type={inputType}
          placeholder={inputPlaceholder}
          ref={ref}
          className={clsx(styles.field__input, {
            [styles.field__password_input]: type === "password",
          })}
          {...restProps}
        />
        {type === "password" && (
          <Button
            name={hidden ? input.passwordButtonShow : input.passwordButtonHide}
            className={styles.field__password_button}
            onClick={handleClick}
          />
        )}
      </label>

      {errors[inputName] && <ErrorMessage message={errors[inputName]?.message as string} />}
    </div>
  );
});

export default Input;
