import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { FieldErrors } from "react-hook-form";

import { AppContextProvider } from "../../context";
import { Input } from "..";

jest.mock("../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
}));

type FieldErrorsObject = {
  [key: string]: {
    message: string;
  };
};

const errorsMock: FieldErrorsObject = {
  name: { message: "Name is required" },
  password: { message: "Password is required" },
};

jest.mock("react-hook-form", () => ({
  useForm: jest.fn(() => ({
    formState: {
      errors: errorsMock as FieldErrors,
    },
  })),
}));

describe("Input component", () => {
  test("should render input field.", () => {
    render(
      <AppContextProvider>
        <Input
          inputName="name"
          type="text"
          placeholder="Email"
          errors={errorsMock as FieldErrors}
        />
      </AppContextProvider>,
    );

    const input = screen.getByPlaceholderText(/email/i);
    expect(input).toBeInTheDocument();
  });

  test("should render an input and a button if input type is password.", () => {
    render(
      <AppContextProvider>
        <Input
          inputName="password"
          type="password"
          placeholder="Password"
          errors={errorsMock as FieldErrors}
        />
      </AppContextProvider>,
    );

    const input = screen.getByPlaceholderText(/password/i);
    const button = screen.getByRole("button", { name: /show/i });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("should toggle Show/Hide button on click.", async () => {
    render(
      <AppContextProvider>
        <Input
          inputName="password"
          type="password"
          placeholder="Password"
          errors={errorsMock as FieldErrors}
        />
      </AppContextProvider>,
    );

    const button = screen.getByRole("button", { name: /show/i });

    expect(button).toBeInTheDocument();

    await userEvent.click(button);

    const buttonShow = screen.queryByRole("button", { name: /show/i });
    const buttonHide = screen.queryByRole("button", { name: /hide/i });

    expect(buttonHide).toBeInTheDocument();
    expect(buttonShow).not.toBeInTheDocument();
  });

  test("should render default placeholder if there is no placeholder property.", () => {
    render(
      <AppContextProvider>
        <Input inputName="password" type="password" errors={errorsMock as FieldErrors} />
      </AppContextProvider>,
    );

    const input = screen.getByPlaceholderText(/password/i);
    expect(input).toBeInTheDocument();
  });
});
