import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { ErrorMessage } from "..";

jest.mock("../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
}));

describe("ErrorMessage component", () => {
  test("should be rendered with correct props", () => {
    const props = {
      message: "Error message",
      className: "error",
    } as const;

    render(<ErrorMessage {...props} />);

    const error = screen.getByText(/Error message/i);

    expect(error).toBeInTheDocument();
  });
});
