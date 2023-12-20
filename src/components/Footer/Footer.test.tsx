import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { DICTIONARY } from "../../constants";
import { AppContextProvider } from "../../context";
import { Footer } from "..";

jest.mock("../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
}));

const DICT = DICTIONARY.en.footer;

const titleText = DICT.title;
const linkSchoolText = DICT.linkSchool;
const linkCourseText = DICT.linkCourse;

describe("Footer component", () => {
  test("should render correct title", () => {
    render(
      <AppContextProvider>
        <Footer />
      </AppContextProvider>,
    );

    const title = screen.getByText(titleText);

    expect(title).toBeInTheDocument();
  });

  test("should render correct RS School links", () => {
    render(
      <AppContextProvider>
        <Footer />
      </AppContextProvider>,
    );

    const linkSchool = screen.getByRole("link", { name: linkSchoolText });
    const linkCourse = screen.getByRole("link", { name: linkCourseText });

    expect(linkSchool).toBeInTheDocument();
    expect(linkCourse).toBeInTheDocument();
  });
});
