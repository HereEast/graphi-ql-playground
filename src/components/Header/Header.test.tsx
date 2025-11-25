import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import { render, screen, act } from "@testing-library/react";
import { useRouter } from "next/router";

import { AppContextProvider } from "../../context";
import { Header } from "..";

Object.defineProperty(window, "innerWidth", {
  writable: true,
  value: 500,
});

let mockAuthState = [{ id: "123", displayName: "John Snow" }, false, null];

jest.mock("../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
  logoutUser: jest.fn(() => {
    mockAuthState = [null, false, null];
  }),
}));

jest.mock("react-firebase-hooks/auth", () => ({
  useAuthState: jest.fn(() => mockAuthState),
}));

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({ push: jest.fn() }),
}));

describe("Header component", () => {
  test("should render", () => {
    render(
      <AppContextProvider>
        <Header />
      </AppContextProvider>,
    );

    const title = screen.getByText(/graphiql/i);

    expect(title).toBeInTheDocument();
  });

  test("should render correct elements", () => {
    render(
      <AppContextProvider>
        <Header />
      </AppContextProvider>,
    );

    const title = screen.getByText(/graphiql/i);
    const linkPlayground = screen.getByRole("link", { name: /playground/i });
    const linkSignOut = screen.getByRole("link", { name: /sign out/i });
    const select = screen.getByRole("combobox");

    expect(title).toBeInTheDocument();
    expect(linkPlayground).toBeInTheDocument();
    expect(linkSignOut).toBeInTheDocument();
    expect(select).toBeInTheDocument();
  });

  test("should render correct links if user is not authorized", () => {
    mockAuthState = [null, false, null];

    render(
      <AppContextProvider>
        <Header />
      </AppContextProvider>,
    );

    const linkLogin = screen.getByRole("link", { name: /login/i });
    const linkRegister = screen.getByRole("link", { name: /register/i });
    const linkPlayground = screen.queryByRole("link", { name: /playground/i });

    expect(linkLogin).toBeInTheDocument();
    expect(linkRegister).toBeInTheDocument();
    expect(linkPlayground).not.toBeInTheDocument();
  });

  test("should toggle mobile menu on click on button Menu", async () => {
    render(
      <AppContextProvider>
        <Header />
      </AppContextProvider>,
    );

    const header = document.getElementsByClassName("header")[0];
    const buttonMenu = screen.getByRole("button", { name: /menu/i });

    expect(buttonMenu).toBeInTheDocument();

    await userEvent.click(buttonMenu);
    expect(header).toHaveClass("menu__open");

    await userEvent.click(buttonMenu);
    expect(header).not.toHaveClass("menu__open");
  });

  test("should close mobile Menu on click on document", async () => {
    render(
      <AppContextProvider>
        <Header />
      </AppContextProvider>,
    );

    const header = document.getElementsByClassName("header")[0];
    const buttonMenu = screen.getByRole("button", { name: /menu/i });

    expect(buttonMenu).toBeInTheDocument();

    await userEvent.click(buttonMenu);
    expect(header).toHaveClass("menu__open");

    await userEvent.click(document.body);
    expect(header).not.toHaveClass("menu__open");
  });

  test("should close the menu on window resize when width is greater than 480", () => {
    render(
      <AppContextProvider>
        <Header />
      </AppContextProvider>,
    );

    act(() => {
      window.dispatchEvent(new Event("resize"));
    });

    const header = document.getElementsByClassName("header")[0];
    expect(header).not.toHaveClass("menu__open");
  });

  test("should switch language on select", async () => {
    render(
      <AppContextProvider>
        <Header />
      </AppContextProvider>,
    );

    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();

    await userEvent.selectOptions(select, "ru");

    const buttonMenuRu = screen.getByRole("button", { name: /меню/i });
    expect(buttonMenuRu).toBeInTheDocument();

    const buttonMenuEn = screen.queryByRole("button", { name: /menu/i });
    expect(buttonMenuEn).not.toBeInTheDocument();

    await userEvent.selectOptions(select, "en");
  });

  test("should log user out on click on Sign Out button", async () => {
    const authValueMock = [null, false, null];

    mockAuthState = [{ id: "123", displayName: "John Snow" }, false, null];

    render(
      <AppContextProvider>
        <Header />
      </AppContextProvider>,
    );

    const header = document.getElementsByClassName("header")[0];
    const linkSignOut = screen.getByRole("link", { name: /sign out/i });

    expect(linkSignOut).toBeInTheDocument();

    await userEvent.click(linkSignOut);

    expect(mockAuthState).toStrictEqual(authValueMock);
    expect(useRouter().push).toHaveBeenCalledWith("login");
    expect(header).not.toHaveClass("menu__open");
  });
});
