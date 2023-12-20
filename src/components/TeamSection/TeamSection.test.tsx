import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { DICTIONARY } from "../../constants";
import { AppContextProvider } from "../../context";
import { TeamSection } from "..";

jest.mock("../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
}));

const titleText = DICTIONARY.en.home.teamTitle;

const teamData = DICTIONARY.en.team;
const maxCount = DICTIONARY.en.team.length;

describe("TeamSection component", () => {
  test("should render correct title and number of links", () => {
    render(
      <AppContextProvider>
        <TeamSection />
      </AppContextProvider>,
    );

    const teamTitle = screen.getByText(titleText);
    const links = screen.getAllByRole("link");

    expect(teamTitle).toBeInTheDocument();
    expect(links.length).toBe(maxCount);
  });

  test("should render correct team data", () => {
    render(
      <AppContextProvider>
        <TeamSection />
      </AppContextProvider>,
    );

    teamData.forEach((data) => {
      const name = screen.getByText(data.name);
      const description = screen.getByText(data.description);

      expect(name).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });
  });
});
