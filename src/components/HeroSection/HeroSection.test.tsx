import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { DICTIONARY } from "../../constants";
import { AppContextProvider } from "../../context";
import { HeroSection } from "..";

jest.mock("../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
}));

let mockAuthState = [{ id: "123", displayName: "John Snow" }, false, null];

jest.mock("react-firebase-hooks/auth", () => ({
  useAuthState: jest.fn(() => mockAuthState),
}));

const heroTitleText = DICTIONARY.en.home.heroTitle;
const heroParagraphText = DICTIONARY.en.home.heroPar;
const linkTextPlay = DICTIONARY.en.home.heroButtonPlay;
const linkTextLogin = DICTIONARY.en.home.heroButtonLogin;

describe("HeroSection component", () => {
  test("should render correct title, paragraph and link", () => {
    render(
      <AppContextProvider>
        <HeroSection />
      </AppContextProvider>,
    );

    const heroTitle = screen.getByText(heroTitleText);
    const heroParagraph = screen.getByText(heroParagraphText);
    const heroLink = screen.getByRole("link", { name: linkTextPlay });

    expect(heroTitle).toBeInTheDocument();
    expect(heroParagraph).toBeInTheDocument();
    expect(heroLink).toBeInTheDocument();
  });

  test("should render login link when user is not authenticated", () => {
    mockAuthState = [null, false, null];

    render(
      <AppContextProvider>
        <HeroSection />
      </AppContextProvider>,
    );

    const heroLink = screen.getByRole("link", { name: linkTextLogin });

    expect(heroLink).toBeInTheDocument();
  });
});
