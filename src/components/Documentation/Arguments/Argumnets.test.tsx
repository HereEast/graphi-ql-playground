import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { schemaTypeMock } from "../../../__mocks__/schema";
import { AppContextProvider } from "../../../context";
import { Arguments } from "../..";

jest.mock("../../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
}));

describe("Arguments component", () => {
  test("should render an input and a button.", () => {
    render(
      <AppContextProvider>
        <Arguments args={schemaTypeMock} />
      </AppContextProvider>,
    );

    const name = screen.getByText("id");
    const type = screen.getByText("ID");

    expect(name).toBeInTheDocument();
    expect(type).toBeInTheDocument();
  });

  test("shouldn't render anything if args array is empty.", () => {
    render(
      <AppContextProvider>
        <Arguments args={[]} />
      </AppContextProvider>,
    );

    const name = screen.queryByText("id");

    expect(name).toBeNull();
  });
});
