import { ReactElement, forwardRef, useState } from "react";
import { FieldErrors } from "react-hook-form";
import { Button } from "../Button";
import { Input } from "../Input";

import classnames from "classnames";
import styles from "./passwordInput.module.scss";

export interface PasswordInputProps {
  inputName: "email" | "password" | "name";
  type?: "text" | "email" | "password";
  placeholder?: string;
  className?: string;
  errors: FieldErrors;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ inputName, placeholder, className, errors, ...restProps }, ref): ReactElement => {
    const [hidden, setHidden] = useState(true);

    function handleClick(): void {
      setHidden(!hidden);
    }
    return (
      <Input
        inputName={inputName}
        type={hidden ? "password" : "text"}
        placeholder={placeholder}
        className={classnames(className, styles.field__password)}
        errors={errors}
        ref={ref}
        {...restProps}
      >
        <Button
          name={hidden ? "Show" : "Hide"}
          className={styles.field__password_button}
          onClick={handleClick}
        />
      </Input>
    );
  },
);

export default PasswordInput;
