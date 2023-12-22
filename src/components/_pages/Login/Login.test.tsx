import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";

import { AppContextProvider } from "../../../context";
import { DICTIONARY } from "../../../constants";
import { Login } from "../..";
import { Page } from "../../../types";

const mockAuthStateFalse = [null, false, null];

jest.mock("../../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
  loginUser: jest.fn(),
}));

jest.mock("react-firebase-hooks/auth", () => ({
  useAuthState: jest.fn(() => mockAuthStateFalse),
}));

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({ replace: jest.fn(), push: jest.fn() }),
}));

describe("Login component", () => {
  test("should render 2 input fields, a button ad a title.", () => {
    render(
      <AppContextProvider>
        <Login />
      </AppContextProvider>,
    );

    const title = screen.getByRole("heading", { name: /hello/i });
    const inputEmail = screen.getByPlaceholderText(/email/i);
    const inputPassword = screen.getByPlaceholderText(/password/i);
    const button = screen.getByRole("button", { name: /log in/i });

    expect(title).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("should not show errors if email and password are correct.", async () => {
    const correctEmail = "test@mail.com";
    const correctPassword = "Aa1!aaaa";

    render(
      <AppContextProvider>
        <Login />
      </AppContextProvider>,
    );

    const inputEmail: HTMLInputElement = screen.getByPlaceholderText(/email/i);
    const inputPassword: HTMLInputElement = screen.getByPlaceholderText(/password/i);

    await userEvent.type(inputEmail, correctEmail);
    await userEvent.type(inputPassword, correctPassword);

    const errorEmail = screen.queryByText(DICTIONARY.en.formErrors.email_valid);
    const errorPassword = screen.queryByText(DICTIONARY.en.formErrors.password_required);

    expect(errorEmail).not.toBeInTheDocument();
    expect(errorPassword).not.toBeInTheDocument();
  });

  test("should redirect to Playground page on successful login.", async () => {
    const correctEmail = "test@mail.com";
    const correctPassword = "Aa1!aaaa";

    render(
      <AppContextProvider>
        <Login />
      </AppContextProvider>,
    );

    const inputEmail = screen.getByPlaceholderText(/email/i);
    const inputPassword = screen.getByPlaceholderText(/password/i);
    const button = screen.getByRole("button", { name: /log in/i });

    await userEvent.type(inputEmail, correctEmail);
    await userEvent.type(inputPassword, correctPassword);

    await userEvent.click(button);

    expect(useRouter().replace).toHaveBeenCalledWith(Page.PLAYGROUND);
  });
});
