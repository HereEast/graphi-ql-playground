import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { AppContextProvider } from "../../context";
import { ProtectedRoute } from "..";

let mockAuthState = [{ id: "123", displayName: "John Snow" }, false, null];

jest.mock("../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
}));

jest.mock("react-firebase-hooks/auth", () => ({
  useAuthState: jest.fn(() => mockAuthState),
}));

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({ replace: jest.fn() }),
}));

describe("ProtectedRoute component", () => {
  test("should render children components if user is authorized.", () => {
    render(
      <AppContextProvider>
        <ProtectedRoute>
          <div>Children</div>
        </ProtectedRoute>
      </AppContextProvider>,
    );

    const children = screen.getByText(/children/i);

    expect(children).toBeInTheDocument();
  });

  test("should not render children components if user is authorized.", () => {
    mockAuthState = [null, false, null];

    render(
      <AppContextProvider>
        <ProtectedRoute>
          <div>Children</div>
        </ProtectedRoute>
      </AppContextProvider>,
    );

    const children = screen.queryByText(/children/i);

    expect(children).not.toBeInTheDocument();
  });
});
