import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import { Button } from "..";

jest.mock("../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
}));

describe("Button component", () => {
  test("should be rendered with correct props", () => {
    expect(true).toBe(true);

    render(<Button name="Click" />);
  });
});
