import "@testing-library/jest-dom";

import { render, screen, waitFor } from "@testing-library/react";

import { AppContextProvider } from "../../context";
import { fetchSchema } from "../../utils";
import { Documentation } from "..";

jest.mock("../../utils/fetchSchema", () => ({
  fetchSchema: jest.fn(),
}));

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

  test("renders error message on schema fetch failure", async () => {
    (fetchSchema as jest.Mock).mockRejectedValue(new Error("Mocked error"));

    render(
      <AppContextProvider>
        <Documentation docOpened={true} />
      </AppContextProvider>,
    );

    await waitFor(() => {
      const errorMessage = screen.getByText(/Failed to fetch the schema/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
