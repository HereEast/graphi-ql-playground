import "@testing-library/react";

import { isValidJson } from "../../utils";

describe("isValidJson function", () => {
  test("should return true for a valid JSON string", () => {
    const validJsonString = JSON.stringify({ page: 2 });
    expect(isValidJson(validJsonString)).toBe(true);
  });

  test("should return false for an invalid JSON string", () => {
    const invalidJsonString = String({ key: "value" });
    expect(isValidJson(invalidJsonString)).toBe(false);
  });

  test("should return false for an empty string", () => {
    const emptyString = "";
    expect(isValidJson(emptyString)).toBe(false);
  });
});
