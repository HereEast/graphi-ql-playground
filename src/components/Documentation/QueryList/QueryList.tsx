import { ReactElement, useState } from "react";
import { IntrospectionObjectType, IntrospectionSchema } from "graphql";
import clsx from "clsx";

import { useLocale } from "../../../hooks";
import { getTypeName } from "../../../utils";
import { Arguments, Button } from "../..";

import styles from "./QueryList.module.scss";

interface QueryListProps {
  schema: IntrospectionSchema | null;
}

function QueryList({ schema }: QueryListProps): ReactElement {
  const { tooltips } = useLocale();

  const [queryListOpened, setQueryListOpened] = useState(false);

  const querySchema = schema?.types.filter(
    (item) => item.name === "Query",
  )[0] as IntrospectionObjectType;

  function toggleQueryList(): void {
    setQueryListOpened(!queryListOpened);
  }

  return (
    <div className={styles.queryList}>
      <Button
        name="Query"
        className={styles.queryList__button}
        id="button-toggleQuery"
        tooltip={queryListOpened ? tooltips.hide : tooltips.show}
        onClick={toggleQueryList}
      />

      <div
        className={clsx(styles.queryList__fields, {
          [styles.queryList__fields_open]: queryListOpened,
        })}
      >
        {querySchema &&
          querySchema.fields.map((field) => (
            <div key={field.name} className={styles.queryList__field}>
              <span className={styles.name}>{field.name}</span>
              <Arguments field={field} />
              {": "}
              <span className={styles.type}>{getTypeName(field.type)}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default QueryList;
