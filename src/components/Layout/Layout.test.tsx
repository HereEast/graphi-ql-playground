import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { ReactElement } from "react";

import { AppContextProvider } from "../../context";
import { Layout } from "..";

const headerText = "Header";
const footerText = "Footer";

jest.mock("../Header/Header", () => (): ReactElement => <div>{headerText}</div>);
jest.mock("../Footer/Footer", () => (): ReactElement => <div>{footerText}</div>);

jest.mock("../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
}));

let mockAuthState = [{ id: "123", displayName: "John Snow" }, false, null];

jest.mock("react-firebase-hooks/auth", () => ({
  useAuthState: jest.fn(() => mockAuthState),
}));

describe("Layout component", () => {
  test("should render Header and Footer", () => {
    render(
      <AppContextProvider>
        <Layout>
          <div>Children</div>
        </Layout>
      </AppContextProvider>,
    );

    const header = screen.getByText(headerText);
    const footer = screen.getByText(footerText);

    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  test("should render its children", () => {
    render(
      <AppContextProvider>
        <Layout>
          <div>Children</div>
        </Layout>
      </AppContextProvider>,
    );

    const children = screen.getByText(/children/i);
    const loading = screen.queryByText(/loading/i);

    expect(children).toBeInTheDocument();
    expect(loading).not.toBeInTheDocument();
  });

  test("should render loading if loading is true in useAuthState", () => {
    mockAuthState = [{ id: "123", displayName: "John Snow" }, true, null];

    render(
      <AppContextProvider>
        <Layout>
          <div>Children</div>
        </Layout>
      </AppContextProvider>,
    );

    const loading = screen.getByText(/loading/i);
    const children = screen.queryByText(/children/i);

    expect(loading).toBeInTheDocument();
    expect(children).not.toBeInTheDocument();
  });
});
