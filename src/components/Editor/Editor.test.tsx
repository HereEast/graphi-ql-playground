import "@testing-library/jest-dom";

import userEvent from "@testing-library/user-event";
import { render, screen, fireEvent } from "@testing-library/react";

import { AppContextProvider } from "../../context";
import { EditorProps } from "./Editor";
import { Editor } from "..";

jest.mock("../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
}));

const mockCode = "const greet = () => { console.log('Hello!'); }";
const setCode = jest.fn();

const props: EditorProps = {
  code: mockCode,
  className: "",
};

describe("Editor component", () => {
  test("should render textarea element with correct value.", () => {
    render(
      <AppContextProvider>
        <Editor {...props} />
      </AppContextProvider>,
    );

    const textArea = screen.getByRole("textbox");

    expect(textArea).toBeInTheDocument();
    expect(textArea).toHaveValue(mockCode);
  });

  test("should disable textarea in read mode.", () => {
    const props: EditorProps = {
      mode: "read",
      code: mockCode,
      className: "",
    };

    render(
      <AppContextProvider>
        <Editor {...props} />
      </AppContextProvider>,
    );

    const textArea = screen.getByRole("textbox");
    expect(textArea).toBeDisabled();
  });

  test("should handle input change.", async () => {
    const props: EditorProps = {
      mode: "edit",
      code: "",
      setCode: setCode,
      className: "",
    };

    render(
      <AppContextProvider>
        <Editor {...props} />
      </AppContextProvider>,
    );

    const textArea = screen.getByRole("textbox") as HTMLTextAreaElement;

    await userEvent.clear(textArea);
    await userEvent.type(textArea, "Hello");

    expect(setCode).toHaveBeenCalledTimes(5);
  });

  test("should handle scroll event.", async () => {
    render(
      <AppContextProvider>
        <Editor {...props} />
      </AppContextProvider>,
    );

    const linesCount = screen.getByRole("list");
    const textArea = screen.getByRole("textbox");

    fireEvent.scroll(textArea, { target: { scrollTop: 100 } });

    expect(linesCount.scrollTop).toBe(100);
    expect(textArea.scrollTop).toBe(100);
  });
});
