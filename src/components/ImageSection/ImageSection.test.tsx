import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { AppContextProvider } from "../../context";
import { ImageSection } from "..";

jest.mock("../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
}));

describe("ImageSection component", () => {
  test("should render all images", () => {
    render(
      <AppContextProvider>
        <ImageSection />
      </AppContextProvider>,
    );

    const images = screen.getAllByRole("img");

    expect(images.length).toBe(2);
  });
});
