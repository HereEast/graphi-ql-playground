const space = " ";
const newLine = "\n";

export function prettifyCode(string: string): string {
  return addIndents(formatCode(string));
}

// Format spaces and new lines
export function formatCode(string: string): string {
  const code = removeExtraSpaces(removeNewLines(string));

  let result = "";

  for (let i = 0; i < code.length; i++) {
    const currentChar = code[i];
    const prevChar = code[i - 1];
    const nextChar = code[i + 1];

    // Open
    if (currentChar === "{") {
      if (prevChar && prevChar !== space) {
        result += space;
      }

      result += currentChar + newLine;
      continue;
    }
    // Closing
    if (code[i] === "}") {
      if (prevChar && (prevChar.match(/[a-z]/i) || prevChar === space)) {
        result += newLine;
      }

      result += currentChar;

      if (nextChar && nextChar === "}") {
        result += newLine;
      }

      continue;
    }

    // Spaces
    if (
      currentChar === " " &&
      prevChar &&
      prevChar.match(/[a-z]/i) &&
      nextChar &&
      nextChar.match(/[a-z]/i)
    ) {
      result += "\n";
      continue;
    }

    result += currentChar;
  }

  return result;
}

// Indents
export function addIndents(string: string): string {
  const indent = 2;
  const result = [];

  let indentCount = 0;

  const lines = string.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const currentLine = lines[i];

    if (currentLine.includes("}")) {
      indentCount -= 1;
    }

    const indentedLine = space.repeat(indent * indentCount) + currentLine.trim();
    result.push(indentedLine);

    if (currentLine.includes("{")) {
      indentCount += 1;
    }
  }

  return result.join("\n");
}

// New lines
export function removeNewLines(string: string): string {
  return string.replace(/\n/gi, "");
}

// Extra spaces
export function removeExtraSpaces(string: string): string {
  return string.replace(/\s+/g, " ");
}
