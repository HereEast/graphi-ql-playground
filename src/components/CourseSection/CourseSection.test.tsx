import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { DICTIONARY } from "../../constants";
import { AppContextProvider } from "../../context";
import { CourseSection } from "..";

jest.mock("../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
}));

const titleText = DICTIONARY.en.home.courseTitle;
const paragraphText = DICTIONARY.en.home.coursePar1;
const linkText = DICTIONARY.en.home.courseLink;

describe("CourseSection component", () => {
  test("should render correct content", () => {
    render(
      <AppContextProvider>
        <CourseSection />
      </AppContextProvider>,
    );

    const image = screen.getByRole("img", { name: /Image for Course section/i });
    const courseTitle = screen.getByText(titleText);
    const courseParagraph = screen.getByText(paragraphText);
    const courseLink = screen.getByRole("link", { name: linkText });

    expect(image).toBeInTheDocument();
    expect(courseTitle).toBeInTheDocument();
    expect(courseParagraph).toBeInTheDocument();
    expect(courseLink).toBeInTheDocument();
  });
});
