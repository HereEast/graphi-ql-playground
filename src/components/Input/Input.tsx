import { ReactElement, ReactNode, forwardRef } from "react";
import { FieldErrors } from "react-hook-form";
import { ErrorMessage } from "../ErrorMessage";

import classnames from "classnames";
import styles from "./input.module.scss";

export interface InputProps {
  inputName: "email" | "password" | "name";
  type?: "text" | "email" | "password";
  placeholder?: string;
  className?: string;
  errors: FieldErrors;
  children?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ inputName, placeholder, className, errors, children, ...restProps }, ref): ReactElement => {
    return (
      <div className={classnames(styles.field, className || "")}>
        <label className={styles.field__label}>
          <input
            ref={ref}
            className={styles.field__input}
            placeholder={
              placeholder || (inputName && inputName[0].toUpperCase() + inputName.slice(1))
            }
            {...restProps}
          />
          {children ? children : null}
        </label>

        {errors[inputName] && <ErrorMessage message={errors[inputName]?.message as string} />}
      </div>
    );
  },
);

export default Input;
