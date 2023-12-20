import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Button } from "..";

jest.mock("../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
}));

const handleClick = jest.fn();

describe("Button component", () => {
  test("should be rendered with correct props", () => {
    const props = {
      type: "button",
      name: "Click",
      className: "button__test",
    } as const;

    render(<Button {...props} />);

    const button = screen.getByRole("button", { name: /click/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("button__test");
    expect(button).toHaveAttribute("type", "button");
  });

  test("should call callback function if it's passed as a parameter", async () => {
    const props = {
      name: "Button",
      onClick: (): void => handleClick(),
    } as const;

    render(<Button {...props} />);

    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();

    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });

  test("should render children if there is a children prop", async () => {
    render(
      <Button name="Button">
        {" "}
        <h1>Child</h1>
      </Button>,
    );

    const button = screen.getByRole("button", { name: /button/i });
    expect(button).toBeInTheDocument();

    const child = screen.getByText(/child/i);
    expect(child).toBeInTheDocument();
  });
});
