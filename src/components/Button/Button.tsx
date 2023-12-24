import { ReactElement, MouseEvent, ReactNode } from "react";

import clsx from "clsx";
import styles from "./Button.module.scss";

interface ButtonProps {
  type?: "submit" | "reset" | "button";
  name?: string | undefined;
  className?: string;
  id?: string;
  disabled?: boolean;
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function Button({
  name,
  type = "button",
  className,
  id,
  disabled,
  children,
  onClick = (): void => {},
}: ButtonProps): ReactElement {
  return (
    <button
      type={type}
      className={clsx(styles.button, className || "")}
      id={id}
      onClick={(event): void => onClick(event)}
      disabled={disabled}
      data-testid={id}
    >
      {name && name}
      {children && children}
    </button>
  );
}

export default Button;
