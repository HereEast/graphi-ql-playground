import { ReactElement, useState } from "react";
import {
  IntrospectionInputObjectType,
  IntrospectionObjectType,
  IntrospectionSchema,
} from "graphql";
import clsx from "clsx";

import { SchemaObjectType } from "../../../types";
import { Button, FieldList } from "../..";

import styles from "./TypeList.module.scss";

interface TypeListProps {
  schema: IntrospectionSchema | null;
}

function TypeList({ schema }: TypeListProps): ReactElement {
  const schemaTypes = schema?.types.filter(
    (item) => item.name !== "Query" && !item.name.startsWith("__"),
  ) as SchemaObjectType[];

  const [typesOpen, setTypesOpen] = useState<boolean[]>(new Array(schemaTypes?.length).fill(false));

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
    <div className={styles.typesList}>
      <h4 className={styles.typesList__title}>All Schema Types</h4>

      <div className={styles.typesList__types}>
        {schemaTypes &&
          schemaTypes.map((field, index) => (
            <div key={field.name} className={styles.type}>
              <Button
                name={field.name}
                className={styles.type__button}
                onClick={() => handleOpenType(field, index)}
              />

              <div
                className={clsx(styles.type__info, {
                  [styles.type__info_open]: typesOpen[index],
                })}
              >
                {field.description && (
                  <span className={styles.type__description}>{field.description}</span>
                )}

                <FieldList field={field} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TypeList;
