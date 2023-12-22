import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { ReactElement } from "react";

import { AppContextProvider } from "../../../context";
import { Playground } from "../..";

jest.mock("../../RequestEditor/RequestEditor", () => (): ReactElement => <div>Request Editor</div>);
jest.mock(
  "../../ResponseEditor/ResponseEditor",
  () => (): ReactElement => <div>Response Editor</div>,
);

jest.mock("../../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
}));

describe("Playground component", () => {
  test("should render RequestEditor and ResponseEditor components", () => {
    render(
      <AppContextProvider>
        <Playground />
      </AppContextProvider>,
    );

    const requestView = screen.getByText(/request/i);
    const responseView = screen.getByText(/response/i);

    expect(requestView).toBeInTheDocument();
    expect(responseView).toBeInTheDocument();
  });
});
