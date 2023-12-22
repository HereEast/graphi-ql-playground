import { ReactElement, UIEvent, RefObject } from "react";

import clsx from "clsx";
import styles from "./LinesNumber.module.scss";

export interface LinesNumberProps {
  className?: string;
  code: string;
  handleScroll: (e: UIEvent<HTMLUListElement | HTMLTextAreaElement>) => void;
  linesNumberRef: RefObject<HTMLUListElement>;
}

function LinesNumber({
  className = "",
  code,
  handleScroll,
  linesNumberRef,
}: LinesNumberProps): ReactElement {
  return (
    <ul
      className={clsx(styles.linesNumber, className && styles[`${className}_linesNumber`])}
      ref={linesNumberRef}
      onScroll={handleScroll}
    >
      {code.split("\n").map((line, index) => (
        <li className={styles.linesNumber__item} key={`${line}-${index}`}>
          <span>{index + 1}</span>
        </li>
      ))}
    </ul>
  );
}

export default LinesNumber;
