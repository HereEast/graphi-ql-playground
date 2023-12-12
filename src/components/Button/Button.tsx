import { ReactElement, MouseEvent, ReactNode } from "react";

import clsx from "clsx";
import styles from "./Button.module.scss";

interface ButtonProps {
  type?: "submit" | "reset" | "button";
  name?: string | undefined;
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function Button({
  name,
  type = "button",
  className,
  disabled,
  children,
  onClick = (): void => {},
}: ButtonProps): ReactElement {
  return (
    <button
      type={type}
      className={clsx(styles.button, className || "")}
      onClick={(event): void => onClick(event)}
      disabled={disabled}
    >
      {name && name}
      {children && children}
    </button>
  );
}

export default Button;
