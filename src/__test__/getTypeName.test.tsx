import "@testing-library/react";

import { getTypeName, Type } from "../utils";

describe("getTypeName function", () => {
  test("should return type name if 'name' in type and type.name is not null.", () => {
    const type: Type = { name: "String", kind: "OBJECT" };

    expect(getTypeName(type)).toBe("String");
  });

  test("should return non-null type name if type.kind is 'NON_NULL'.", () => {
    const type: Type = { kind: "NON_NULL", ofType: { name: "Int", kind: "OBJECT" } };
    expect(getTypeName(type)).toBe("Int!");
  });

  test("should return list type name if type.kind is 'LIST'.", () => {
    const type: Type = { kind: "LIST", ofType: { name: "User", kind: "OBJECT" } };
    expect(getTypeName(type)).toBe("[User]");
  });

  test("should return null if type does not contain a valid name.", () => {
    const type: Type = { name: "", kind: "SCALAR" };
    expect(getTypeName(type)).toBeNull();
  });
});
