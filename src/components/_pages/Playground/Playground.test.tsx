import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { ReactElement } from "react";

import { AppContextProvider } from "../../../context";
import { Playground } from "../..";

jest.mock("../../RequestView/RequestView", () => (): ReactElement => <div>Request View</div>);
jest.mock("../../ResponseView/ResponseView", () => (): ReactElement => <div>Response View</div>);

jest.mock("../../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
}));

describe("Playground component", () => {
  test("should render RequestView and ResponseView components", () => {
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
