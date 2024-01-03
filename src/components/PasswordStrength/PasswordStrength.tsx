import { ReactElement, useState, useEffect } from "react";
import { passwordStrength } from "check-password-strength";
import clsx from "clsx";

import styles from "./PasswordStrength.module.scss";

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
              className={clsx(
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
