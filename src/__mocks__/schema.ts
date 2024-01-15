import { IntrospectionInputValue } from "graphql";

export const schemaTypeMock: IntrospectionInputValue[] = [
  {
    name: "id",
    description: "",
    defaultValue: null,
    type: {
      kind: "SCALAR",
      name: "ID",
    },
    isDeprecated: false,
    deprecationReason: null,
  },
  {
    name: "page",
    description: "",
    defaultValue: null,
    type: {
      kind: "SCALAR",
      name: "Int",
    },
    isDeprecated: false,
    deprecationReason: null,
  },
];
