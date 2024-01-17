import "@testing-library/jest-dom";

import { render, screen, fireEvent } from "@testing-library/react";

import { AppContextProvider } from "../../context";
import { IContextMock, ILocaleMock } from "../../__mocks__/types";
import { EndpointForm } from "..";

const APIEndpoint = "https://rickandmortyapi.com/graphql";

const mockToggleDocOpened = jest.fn();
const mockSetApiEndpoint = jest.fn();

jest.mock("../../hooks/useAppContext", () => ({
  useAppContext: (): IContextMock => ({
    apiEndpoint: APIEndpoint,
    setApiEndpoint: mockSetApiEndpoint,
  }),
}));

jest.mock("../../hooks/useLocale", () => ({
  useLocale: (): ILocaleMock => ({
    playground: {
      saveButton: "Save",
    },
  }),
}));

jest.mock("../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
}));

function renderComponent(): void {
  render(
    <AppContextProvider>
      <EndpointForm toggleDocOpened={mockToggleDocOpened} />
    </AppContextProvider>,
  );
}

describe("should save new API endpoint on blur.", () => {
  test("should save new API endpoint if current value and new value are different.", () => {
    renderComponent();

    const input = screen.getByPlaceholderText(APIEndpoint);
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "https://new-api.example.com" } });
    fireEvent.blur(input);

    expect(mockSetApiEndpoint).toHaveBeenCalled();
  });

  test("should render an input and a button.", () => {
    renderComponent();

    const input = screen.getByPlaceholderText(APIEndpoint);
    const saveButton = screen.getByRole("button", { name: /save/i });

    expect(input).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
  });

  test("should close Doc panel on click on input.", () => {
    renderComponent();

    const input = screen.getByPlaceholderText(APIEndpoint);
    expect(input).toBeInTheDocument();

    fireEvent.click(input);

    expect(mockToggleDocOpened).toHaveBeenCalledWith(false);
  });

  test("should input other input value.", () => {
    renderComponent();

    const input = screen.getByPlaceholderText(APIEndpoint);
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "https://new-api.example.com" } });

    expect(screen.getByDisplayValue("https://new-api.example.com")).toBeInTheDocument();
  });
});
