import "@testing-library/react";

import { IntrospectionObjectType, IntrospectionInputObjectType } from "graphql";
import { isObjectType, isObjectInputType } from "../../utils";

describe("isObjectType function", () => {
  test("should return true for IntrospectionObjectType", () => {
    const object: IntrospectionObjectType = {
      name: "User",
      fields: [],
      kind: "OBJECT",
      interfaces: [],
    };

    expect(isObjectType(object)).toBe(true);
  });
});

describe("isObjectInputType function", () => {
  test("should return true for IntrospectionInputObjectType", () => {
    const object: IntrospectionInputObjectType = {
      name: "User",
      kind: "INPUT_OBJECT",
      inputFields: [],
    };

    expect(isObjectInputType(object)).toBe(true);
  });
});
