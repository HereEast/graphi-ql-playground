import { ReactElement } from "react";
import { IntrospectionInputObjectType, IntrospectionObjectType } from "graphql";

import { getTypeName } from "../../../utils";

import styles from "./FieldList.module.scss";

interface FieldListProps {
  field: IntrospectionObjectType | IntrospectionInputObjectType;
}

function isObjectType(
  field: IntrospectionObjectType | IntrospectionInputObjectType,
): field is IntrospectionObjectType {
  return (field as IntrospectionObjectType).fields !== undefined;
}

function isObjectInputType(
  field: IntrospectionObjectType | IntrospectionInputObjectType,
): field is IntrospectionInputObjectType {
  return (field as IntrospectionInputObjectType).inputFields !== undefined;
}

function FieldList({ field }: FieldListProps): ReactElement {
  return (
    <>
      {isObjectType(field) && field.fields && (
        <div>
          {field.fields.map((item) => (
            <div key={item.name}>
              <span>{item.name}</span>: <span>{getTypeName(item.type)}</span>
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
            <div key={item.name}>
              <span>{item.name}</span>: <span>{getTypeName(item.type)}</span>
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
