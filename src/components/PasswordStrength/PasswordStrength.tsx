import { ReactElement, useState, useEffect } from "react";
import { passwordStrength } from "check-password-strength";

import classnames from "classnames";
import styles from "./passwordStrength.module.scss";

interface PasswordStrengthProps {
  inputValue: string;
}

function PasswordStrength({ inputValue }: PasswordStrengthProps): ReactElement {
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    const strengthValue = passwordStrength(inputValue).id;
    setStrength(strengthValue);
  }, [inputValue]);

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
