import { ReactElement } from "react";
import clsx from "clsx";

import styles from "./ErrorMessage.module.scss";

interface MessageProps {
  message: string;
  className?: string;
}

function ErrorMessage({ message, className }: MessageProps): ReactElement {
  return (
    <div className={clsx(styles.message__error, className)}>
      <span className={styles.message__error_text}>{message}</span>
    </div>
  );
}

export default ErrorMessage;
