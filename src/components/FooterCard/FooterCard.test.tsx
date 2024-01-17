import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { FooterCard } from "..";

jest.mock("../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
}));

const teamMember = {
  name: "John Snow",
  image: "/john-snow.jpg",
  github: "github.com/john-snow",
  description: "My name is John Snow",
  position: "Frontend Developer",
};

describe("FooterCard component", () => {
  test("should render correct team member's image and link.", () => {
    render(<FooterCard teamMember={teamMember} key="123" />);

    const image = screen.getByRole("img", { name: /Photo of John/i });
    const link = screen.getByRole("link", { name: /John Snow/i });

    expect(image).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });
});
