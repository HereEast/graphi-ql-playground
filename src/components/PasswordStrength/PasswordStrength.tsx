import { ReactElement } from "react";

import classnames from "classnames";
import styles from "./passwordStrength.module.scss";

interface PasswordStrengthProps {
  strength: number;
  inputValue: string;
}

function PasswordStrength({ strength, inputValue }: PasswordStrengthProps): ReactElement {
  console.log(strength);

  return (
    <div className={styles.strength}>
      {[
        ...new Array(4)
          .fill(0)
          .map((_, index) => (
            <span
              className={classnames(
                styles.strength__item,
                index <= strength && inputValue && styles.strength__color,
              )}
              key={index}
            ></span>
          )),
      ]}
    </div>
  );
}

export default PasswordStrength;
