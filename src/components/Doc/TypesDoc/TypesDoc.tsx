import { ReactElement, useState } from "react";
import {
  IntrospectionInputObjectType,
  IntrospectionObjectType,
  IntrospectionSchema,
} from "graphql";

import clsx from "clsx";

import { Button, FieldList } from "../..";

import styles from "./TypesDoc.module.scss";

interface IQueryDoc {
  schema: IntrospectionSchema | null;
}

type SchemaObject = IntrospectionObjectType | IntrospectionInputObjectType;

function TypesDoc({ schema }: IQueryDoc): ReactElement {
  const schemaTypes = schema?.types.filter(
    (item) => item.name !== "Query" && !item.name.startsWith("__"),
  ) as SchemaObject[];

  const [typesOpen, setTypesOpen] = useState<boolean[]>(new Array(schemaTypes?.length).fill(false));

  console.log(schemaTypes);

  function handleOpenType(
    field: IntrospectionObjectType | IntrospectionInputObjectType,
    index: number,
  ): void {
    if (
      field.description ||
      (field.kind === "OBJECT" && field.fields) ||
      (field.kind === "INPUT_OBJECT" && field.inputFields)
    ) {
      toggleType(index);
    }
  }

  function toggleType(index: number): void {
    setTypesOpen((currentState) => {
      const updatedState = [...currentState];
      updatedState[index] = !currentState[index];

      return updatedState;
    });
  }

  return (
    <div className={styles.typesDoc}>
      <h4 className={styles.typesDoc__title}>All Schema Types</h4>

      <div className={styles.typesDoc__fields}>
        {schemaTypes &&
          schemaTypes.map((field, index) => (
            <div key={field.name} className={styles.field}>
              <Button
                name={field.name}
                className={styles.type__button}
                onClick={() => handleOpenType(field, index)}
              />

              <div
                className={clsx(styles.field__content, {
                  [styles.field__content_open]: typesOpen[index],
                })}
              >
                {field.description && (
                  <span className={styles.field__description}>{field.description}</span>
                )}

                <FieldList field={field} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TypesDoc;
