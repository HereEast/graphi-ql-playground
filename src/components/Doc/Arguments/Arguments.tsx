import { ReactElement } from "react";
import { IntrospectionField } from "graphql";
import { getTypeName } from "../../../utils";

import styles from "./Arguments.module.scss";

interface IArguments {
  field: IntrospectionField;
}

function Arguments({ field }: IArguments): ReactElement | null {
  const args = field.args;

  return args.length > 0 ? (
    <span className={styles.args}>
      <span>(</span>

      {args.map((arg, index) => (
        <span key={index}>
          <span className={styles.args__name}>{arg.name}</span>:{" "}
          <span className={styles.args__type}>{getTypeName(arg.type)}</span>
          {index < args.length - 1 && <span>, </span>}
        </span>
      ))}

      <span>)</span>
    </span>
  ) : null;
}

export default Arguments;
