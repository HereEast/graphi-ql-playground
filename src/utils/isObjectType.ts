import { IntrospectionObjectType, IntrospectionInputObjectType } from "graphql";

export function isObjectType(
  field: IntrospectionObjectType | IntrospectionInputObjectType,
): field is IntrospectionObjectType {
  return (field as IntrospectionObjectType).fields !== undefined;
}

export function isObjectInputType(
  field: IntrospectionObjectType | IntrospectionInputObjectType,
): field is IntrospectionInputObjectType {
  return (field as IntrospectionInputObjectType).inputFields !== undefined;
}
