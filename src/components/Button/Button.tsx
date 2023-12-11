import { ReactElement, MouseEvent } from "react";

import clsx from "clsx";
import styles from "./Button.module.scss";

interface ButtonProps {
  type?: "submit" | "reset" | "button";
  name: string | undefined;
  className?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function Button({
  name,
  type = "button",
  className,
  disabled,
  onClick = (): void => {},
}: ButtonProps): ReactElement {
  return (
    <button
      type={type}
      className={clsx(styles.button, className || "")}
      onClick={(event): void => onClick(event)}
      disabled={disabled}
    >
      {name}
    </button>
  );
}

export default Button;
