import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ReactElement } from "react";

import { AppContextProvider } from "../../../context";
import { Home } from "../..";

jest.mock("../../HeroSection/HeroSection", () => (): ReactElement => <div>Hero</div>);
jest.mock("../../ImageSection/ImageSection", () => (): ReactElement => <div>Image</div>);
jest.mock("../../CourseSection/CourseSection", () => (): ReactElement => <div>Course</div>);
jest.mock("../../TeamSection/TeamSection", () => (): ReactElement => <div>Team</div>);

jest.mock("../../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
}));

describe("TeamSection component", () => {
  test("should render correct title and number of links", () => {
    render(
      <AppContextProvider>
        <Home />
      </AppContextProvider>,
    );

    const heroSection = screen.getByText(/hero/i);
    const imageSection = screen.getByText(/image/i);
    const courseSection = screen.getByText(/course/i);
    const teamSection = screen.getByText(/team/i);

    expect(heroSection).toBeInTheDocument();
    expect(imageSection).toBeInTheDocument();
    expect(courseSection).toBeInTheDocument();
    expect(teamSection).toBeInTheDocument();
  });
});
