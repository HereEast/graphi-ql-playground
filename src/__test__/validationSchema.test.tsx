import "@testing-library/jest-dom";

import { LANGS } from "../constants";
import { generateLoginSchema, generateRegisterSchema } from "../services";

jest.mock("../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
}));

describe("generateLoginSchema function", () => {
  test("should handle valid input for login schema", () => {
    const schema = generateLoginSchema(LANGS.EN);
    expect(schema.isValidSync({ email: "test@mail.com", password: "Aa1!aaaa" })).toBe(true);
  });
  test("should handle invalid input for login schema", () => {
    const schema = generateLoginSchema(LANGS.EN);
    expect(schema.isValidSync({ email: "invalid-email", password: "short" })).toBe(false);
  });
});

describe("generateRegisterSchema function", () => {
  test("should handle valid input for register schema", () => {
    const schema = generateRegisterSchema(LANGS.EN);
    expect(
      schema.isValidSync({ name: "John Snow", email: "test@mail.com", password: "Aa1!aaaa" }),
    ).toBe(true);
  });
  test("should handle invalid input for register schema", () => {
    const schema = generateRegisterSchema(LANGS.EN);
    expect(schema.isValidSync({ name: "", email: "invalid-email", password: "short" })).toBe(false);
  });
});
