import { ReactElement, useState } from "react";
import { IntrospectionObjectType, IntrospectionSchema } from "graphql";
import clsx from "clsx";

import { Arguments, Button, Type } from "../..";

import styles from "./QueryDoc.module.scss";

interface IQueryDoc {
  schema: IntrospectionSchema | null;
}

function QueryDoc({ schema }: IQueryDoc): ReactElement {
  const [queryOpened, setQueryOpened] = useState(false);

  const querySchema = schema?.types.filter(
    (item) => item.name === "Query",
  )[0] as IntrospectionObjectType;

  function handleOpenQueryDoc(): void {
    setQueryOpened(!queryOpened);
  }

  return (
    <div className={styles.queryDoc}>
      <Button
        name="Query"
        className={styles.queryDoc__button}
        id="button-toggleQuery"
        onClick={handleOpenQueryDoc}
      />

      <div
        className={clsx(styles.queryDoc__fields, { [styles.queryDoc__fields_open]: queryOpened })}
      >
        {querySchema &&
          querySchema.fields.map((field) => (
            <div key={field.name} className={styles.field}>
              <span className={styles.field__box}>
                <span className={styles.field__name}>{field.name}</span>
                <Arguments field={field} />
                {": "}
                <Type field={field} />
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default QueryDoc;
