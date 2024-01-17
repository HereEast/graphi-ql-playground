import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { AppContextProvider } from "../../../context";
import { objectMock, inputObjectMock } from "../../../__mocks__/schema";
import { FieldList } from "../../";

jest.mock("../../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
}));

describe("FieldList component", () => {
  test("should render fields for IntrospectionObjectType.", () => {
    render(
      <AppContextProvider>
        <FieldList field={objectMock} />
      </AppContextProvider>,
    );

    const name = screen.getByText("info");
    const typeName = screen.getByText("Info");

    expect(name).toBeInTheDocument();
    expect(typeName).toBeInTheDocument();
  });

  test("should render inputFields for IntrospectionInputObjectType.", () => {
    render(
      <AppContextProvider>
        <FieldList field={inputObjectMock} />
      </AppContextProvider>,
    );

    const name = screen.getByText("name");
    const typeName = screen.getByText("String");

    expect(name).toBeInTheDocument();
    expect(typeName).toBeInTheDocument();
  });
});
