import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";

import { AppContextProvider } from "../../../context";
import { NotFound } from "../..";

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({ push: jest.fn() }),
}));

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
    const button = screen.getByRole("button", { name: /back to home/i });

    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("should call router.push() when te button is clicked", async () => {
    render(
      <AppContextProvider>
        <NotFound />
      </AppContextProvider>,
    );

    const button = screen.getByRole("button", { name: /back to home/i });

    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    expect(useRouter().push).toHaveBeenCalledWith("/");
  });
});
