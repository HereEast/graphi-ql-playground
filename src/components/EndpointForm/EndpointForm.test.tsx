import "@testing-library/jest-dom";

import { render, screen, fireEvent } from "@testing-library/react";

import { AppContextProvider } from "../../context";
import { EndpointForm } from "..";

const APIEndpoint = "https://rickandmortyapi.com/graphql";
const mockToggleDocOpened = jest.fn();

jest.mock("../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
}));

describe("EndpointForm component", () => {
  test("should render an input and a button.", () => {
    render(
      <AppContextProvider>
        <EndpointForm toggleDocOpened={mockToggleDocOpened} />
      </AppContextProvider>,
    );

    const input = screen.getByPlaceholderText(APIEndpoint);
    const formButton = screen.getByRole("button", { name: /save/i });

    expect(input).toBeInTheDocument();
    expect(formButton).toBeInTheDocument();
  });

  test("should close Doc panel on click on input.", () => {
    render(
      <AppContextProvider>
        <EndpointForm toggleDocOpened={mockToggleDocOpened} />
      </AppContextProvider>,
    );

    const input = screen.getByPlaceholderText(APIEndpoint);

    expect(input).toBeInTheDocument();

    fireEvent.click(input);

    expect(mockToggleDocOpened).toHaveBeenCalledWith(false);
  });

  test("", () => {
    const newInputValue = "https://new-api.example.com";

    render(
      <AppContextProvider>
        <EndpointForm toggleDocOpened={mockToggleDocOpened} />
      </AppContextProvider>,
    );

    const input = screen.getByPlaceholderText(APIEndpoint);

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: newInputValue } });

    expect(screen.getByDisplayValue(newInputValue)).toBeInTheDocument();
  });
});
