import { prettifyCode, formatCode, removeExtraSpaces, removeNewLines, addIndents } from "../utils";

const inputCode = `
query{user {name age}}
`;

const expectedOutput = `query {
  user {
    name
    age
  }
}`;

const indentInputCode = `
function test() {
if (true) {
console.log('Hello');
}
}
`;

const indentExpectedOutput = `
function test() {
  if (true) {
    console.log('Hello');
  }
}
`;

const formatInputCode = `
query{
user {name age}
}
`;

const formatExpectedOutput = `query {
user {
name
age
}
}`;

describe("prettifyCode function", () => {
  test("should correctly apply all formatting rules", () => {
    const result = prettifyCode(inputCode);
    expect(result).toBe(expectedOutput);
  });
});

describe("removeNewLines function", () => {
  test("should remove all new lines from a string", async () => {
    const string = "A\nstring\nwith\nnew\nlines";

    const result = removeNewLines(string);
    expect(result.includes("\n")).toBe(false);
  });
});

describe("removeExtraSpaces function", () => {
  test("should remove extra spaces from a string", () => {
    const string = "String   with    extra        spaces";

    const result = removeExtraSpaces(string);
    expect(result.includes("  ")).toBe(false);
  });
});

describe("addIndents function", () => {
  test("should correctly indent the given code", () => {
    const result = addIndents(indentInputCode);
    expect(result).toBe(indentExpectedOutput);
  });
});

describe("formatCode function", () => {
  test("should correctly format the given code", () => {
    const result = formatCode(formatInputCode);
    expect(result).toBe(formatExpectedOutput);
  });

  test("should format : correctly", () => {
    const result = formatCode("key:value");
    expect(result).toBe("key: value");
  });

  test("should format , correctly", () => {
    const result = formatCode("a,b,c");
    expect(result).toBe("a, b, c");
  });

  test("should skip space before ( correctly", () => {
    const input = "function (arg)";
    const expectedOutput = "function(arg)";

    expect(formatCode(input)).toEqual(expectedOutput);
  });
});
