import {
  IntrospectionInputValue,
  IntrospectionObjectType,
  IntrospectionInputObjectType,
} from "graphql";

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

export const objectMock: IntrospectionObjectType = {
  name: "Characters",
  fields: [
    {
      name: "info",
      type: { kind: "OBJECT", name: "Info" },
      args: [],
      isDeprecated: false,
      deprecationReason: null,
    },
  ],
  kind: "OBJECT",
  interfaces: [],
};

export const inputObjectMock: IntrospectionInputObjectType = {
  name: "FilterLocation",
  kind: "INPUT_OBJECT",
  inputFields: [
    {
      name: "name",
      type: { kind: "SCALAR", name: "String" },
      isDeprecated: false,
      deprecationReason: null,
      defaultValue: null,
    },
  ],
};
