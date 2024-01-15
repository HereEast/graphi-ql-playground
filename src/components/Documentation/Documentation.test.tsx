import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { AppContextProvider } from "../../context";
import { Documentation } from "..";

jest.mock("../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
}));

describe("Documentation component", () => {
  test("should render component correctly.", () => {
    render(
      <AppContextProvider>
        <Documentation docOpened={true} />
      </AppContextProvider>,
    );

    const component = screen.getByTestId("doc");

    expect(component).toBeInTheDocument();
    expect(component).toHaveClass("doc__open");
  });
});
