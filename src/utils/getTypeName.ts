import {
  IntrospectionListTypeRef,
  IntrospectionNamedTypeRef,
  IntrospectionNonNullTypeRef,
} from "graphql";

export type Type =
  | IntrospectionNamedTypeRef
  | IntrospectionNonNullTypeRef
  | IntrospectionListTypeRef;

export function getTypeName(type: Type): string | null {
  if ("name" in type && type.name) {
    return type.name;
  }

  if ("ofType" in type) {
    if (type.kind === "NON_NULL") {
      const typeName = getTypeName(type.ofType);
      return `${typeName}!`;
    }

    if (type.kind === "LIST") {
      const typeName = getTypeName(type.ofType);
      return `[${typeName}]`;
    }
  }

  return null;
}
