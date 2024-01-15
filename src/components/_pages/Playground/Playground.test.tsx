import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import { ReactElement } from "react";

import { AppContextProvider } from "../../../context";
import { Playground } from "../..";

jest.mock("../../RequestEditor/RequestEditor", () => (): ReactElement => <div>Request Editor</div>);
jest.mock(
  "../../ResponseEditor/ResponseEditor",
  () => (): ReactElement => <div>Response Editor</div>,
);
jest.mock("../../Documentation/Documentation", () => (): ReactElement => <div>Documentation</div>);
jest.mock("../../EndpointForm/EndpointForm", () => (): ReactElement => <div>Form</div>);

jest.mock("../../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
}));

describe("Playground component", () => {
  test("should render component correctly.", () => {
    render(
      <AppContextProvider>
        <Playground />
      </AppContextProvider>,
    );

    const requestView = screen.getByText(/request/i);
    const responseView = screen.getByText(/response/i);
    const documentation = screen.getByText(/documentation/i);
    const form = screen.getByText(/form/i);
    const button = screen.getByRole("button", { name: /doc/i });

    expect(requestView).toBeInTheDocument();
    expect(responseView).toBeInTheDocument();
    expect(documentation).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("should toggle Doc on button click.", () => {
    render(
      <AppContextProvider>
        <Playground />
      </AppContextProvider>,
    );

    const button = screen.getByRole("button", { name: /doc/i });

    expect(button).toBeInTheDocument();
    expect(button).not.toHaveClass("docButton_open");

    fireEvent.click(button);

    expect(button).toHaveClass("docButton_open");
  });
});
