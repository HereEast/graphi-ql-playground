import { ReactElement } from "react";
import { IntrospectionInputObjectType, IntrospectionObjectType } from "graphql";

import { getTypeName, isObjectType, isObjectInputType } from "../../../utils";

import styles from "./FieldList.module.scss";

interface FieldListProps {
  field: IntrospectionObjectType | IntrospectionInputObjectType;
}

function FieldList({ field }: FieldListProps): ReactElement {
  return (
    <>
      {isObjectType(field) && field.fields && (
        <div className={styles.fields}>
          {field.fields.map((item) => (
            <div key={item.name} className={styles.field}>
              <span className={styles.field__name}>{item.name}</span>:{" "}
              <span className={styles.field__type}>{getTypeName(item.type)}</span>
              {item.description && (
                <span className={styles.field__description}>{item.description}</span>
              )}
            </div>
          ))}
        </div>
      )}

      {isObjectInputType(field) && field.inputFields && (
        <div>
          {field.inputFields.map((item) => (
            <div key={item.name} className={styles.field}>
              <span className={styles.field__name}>{item.name}</span>:{" "}
              <span className={styles.field__type}>{getTypeName(item.type)}</span>
              {item.description && (
                <span className={styles.field__description}>{item.description}</span>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default FieldList;
