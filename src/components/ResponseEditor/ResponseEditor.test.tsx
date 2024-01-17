import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { AppContextProvider } from "../../context";
import { PLACEHOLDER_RES } from "../../constants";
import { ResponseEditor } from "..";

jest.mock("../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
}));

describe("ResponseEditor component", () => {
  test("should render the ResponseEditor component", () => {
    render(
      <AppContextProvider>
        <ResponseEditor />
      </AppContextProvider>,
    );

    const placeholder = screen.getByPlaceholderText(PLACEHOLDER_RES);
    expect(placeholder).toBeInTheDocument();
  });
});
