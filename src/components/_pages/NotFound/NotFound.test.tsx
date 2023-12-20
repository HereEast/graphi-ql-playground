import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { AppContextProvider } from "../../../context";
import { NotFound } from "../..";

jest.mock("../../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
}));

describe("NotFound component", () => {
  test("should render correct text and a button", () => {
    render(
      <AppContextProvider>
        <NotFound />
      </AppContextProvider>,
    );

    const text = screen.getByText(/sorry/i);
    const link = screen.getByRole("link", { name: /back to home/i });

    expect(text).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });
});
