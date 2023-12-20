import {
  prettifyCode,
  formatCode,
  removeExtraSpaces,
  removeNewLines,
  addIndents,
} from "../../utils";

describe("prettifyCode function", () => {
  test("should correctly apply all formatting rules", () => {
    const inputCode = `
query{user {name age}}
`;

    const expectedOutput = `query {
  user {
    name
    age
  }
}`;

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
    const inputCode = `
    function test() {
    if (true) {
    console.log('Hello');
    }
    }
    `;

    const expectedOutput = `
function test() {
  if (true) {
    console.log('Hello');
  }
}
`;

    const result = addIndents(inputCode);
    expect(result).toBe(expectedOutput);
  });
});

describe("formatCode function", () => {
  test("should correctly format the given code", () => {
    const inputCode = `
query{
user {name age}
}
`;

    const expectedOutput = `query {
user {
name
age
}
}`;

    const result = formatCode(inputCode);
    expect(result).toBe(expectedOutput);
  });
});
