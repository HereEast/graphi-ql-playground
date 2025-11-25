import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";

import { AppContextProvider } from "../../../context";
import { DICTIONARY } from "../../../constants";
import { Page } from "../../../types";
import { Register } from "../..";

const mockAuthStateFalse = [null, false, null];

jest.mock("../../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
  registerUser: jest.fn(),
}));

jest.mock("react-firebase-hooks/auth", () => ({
  useAuthState: jest.fn(() => mockAuthStateFalse),
}));

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({ replace: jest.fn(), push: jest.fn() }),
}));

describe("Register component", () => {
  test("should render 3 input fields, a button ad a title.", () => {
    render(
      <AppContextProvider>
        <Register />
      </AppContextProvider>,
    );

    const title = screen.getByRole("heading", { name: /register/i });
    const inputName = screen.getByPlaceholderText(/name/i);
    const inputEmail = screen.getByPlaceholderText(/email/i);
    const inputPassword = screen.getByPlaceholderText(/password/i);
    const button = screen.getByRole("button", { name: /create account/i });

    expect(title).toBeInTheDocument();
    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("should not show errors if name, email and password are correct.", async () => {
    const correctName = "John";
    const correctEmail = "test@mail.com";
    const correctPassword = "Aa1!aaaa";

    render(
      <AppContextProvider>
        <Register />
      </AppContextProvider>,
    );

    const inputName = screen.getByPlaceholderText(/name/i);
    const inputEmail = screen.getByPlaceholderText(/email/i);
    const inputPassword = screen.getByPlaceholderText(/password/i);

    await userEvent.type(inputName, correctName);
    await userEvent.type(inputEmail, correctEmail);
    await userEvent.type(inputPassword, correctPassword);

    const errorName = screen.queryByText(DICTIONARY.en.formErrors.name_required);
    const errorEmail = screen.queryByText(DICTIONARY.en.formErrors.email_valid);
    const errorPassword = screen.queryByText(DICTIONARY.en.formErrors.password_required);

    expect(errorName).not.toBeInTheDocument();
    expect(errorEmail).not.toBeInTheDocument();
    expect(errorPassword).not.toBeInTheDocument();
  });

  test("should redirect to Playground page on successful login.", async () => {
    const correctName = "John";
    const correctEmail = "test@mail.com";
    const correctPassword = "Aa1!aaaa";

    render(
      <AppContextProvider>
        <Register />
      </AppContextProvider>,
    );

    const inputName = screen.getByPlaceholderText(/name/i);
    const inputEmail = screen.getByPlaceholderText(/email/i);
    const inputPassword = screen.getByPlaceholderText(/password/i);
    const button = screen.getByRole("button", { name: /create/i });

    await userEvent.type(inputName, correctName);
    await userEvent.type(inputEmail, correctEmail);
    await userEvent.type(inputPassword, correctPassword);

    await userEvent.click(button);

    expect(useRouter().replace).toHaveBeenCalledWith(Page.PLAYGROUND);
  });
});
