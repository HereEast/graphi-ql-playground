import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { AppContextProvider } from "../../context";
import { PLACEHOLDER_REQ } from "../../constants";
import { RequestEditor } from "..";

jest.mock("../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
}));

describe("RequestEditor component", () => {
  test("should render the RequestEditor component.", () => {
    render(
      <AppContextProvider>
        <RequestEditor />
      </AppContextProvider>,
    );

    const placeholder = screen.getByPlaceholderText(PLACEHOLDER_REQ);
    expect(placeholder).toBeInTheDocument();
  });

  test("should render correct buttons.", () => {
    render(
      <AppContextProvider>
        <RequestEditor />
      </AppContextProvider>,
    );

    const buttonRequest = screen.getByTestId("button__request");
    const buttonPrettify = screen.getByTestId("button__prettify");

    expect(buttonRequest).toBeInTheDocument();
    expect(buttonPrettify).toBeInTheDocument();
  });
});
