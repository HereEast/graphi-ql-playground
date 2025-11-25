import "@testing-library/jest-dom";

import { render, screen, fireEvent } from "@testing-library/react";

import { AppContextProvider } from "../../context";
import { PLACEHOLDER_REQ, QUERY_ERRORS } from "../../constants";
import { ILocaleMock, IContextMock } from "../../__mocks__/types";
import {
  prettifiedCodeMock,
  jsonMock,
  prettifiedJsonMock,
  queryCodeMock,
  headersMock,
  prettifiedHeadersMock,
} from "../../__mocks__/requests";

import { RequestEditor } from "..";

const mockSetApiResponse = jest.fn();
const APIEndpoint = "https://rickandmortyapi.com/graphql";

jest.mock("../../hooks/useAppContext", () => ({
  useAppContext: (): IContextMock => ({
    apiEndpoint: APIEndpoint,
    setApiResponse: mockSetApiResponse,
  }),
}));

jest.mock("../../hooks/useLocale", () => ({
  useLocale: (): ILocaleMock => ({
    tooltips: {
      prettify: "Prettify",
      request: "Request",
    },
  }),
}));

jest.mock("../../utils/makeRequest", () => ({
  makeRequest: jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({ data: "mockedData" }),
  }),
}));

jest.mock("../../services/firebase", () => ({
  auth: {
    getAuth: jest.fn(),
  },
}));

describe("RequestEditor component", () => {
  test("should prettify headers code.", async () => {
    render(
      <AppContextProvider>
        <RequestEditor />
      </AppContextProvider>,
    );

    const editor = screen.getByPlaceholderText(PLACEHOLDER_REQ) as HTMLTextAreaElement;

    fireEvent.change(editor, { target: { value: queryCodeMock } });

    const buttonHeader = screen.getByTestId("headers");
    const buttonRequest = screen.getByTestId("button__request");

    fireEvent.click(buttonHeader);

    const editorHeaders = screen.getByPlaceholderText("Request headers...") as HTMLTextAreaElement;

    fireEvent.change(editorHeaders, { target: { value: "Invalid JSON" } });
    fireEvent.click(buttonRequest);

    expect(mockSetApiResponse).toHaveBeenCalledWith(QUERY_ERRORS.headers);
  });

  test("111111.", () => {
    render(
      <AppContextProvider>
        <RequestEditor />
      </AppContextProvider>,
    );

    const buttonRequest = screen.getByTestId("button__request");
    const editor = screen.getByPlaceholderText(PLACEHOLDER_REQ) as HTMLTextAreaElement;

    fireEvent.change(editor, { target: { value: queryCodeMock } });
    fireEvent.click(buttonRequest);
  });

  test("should render the RequestEditor component.", () => {
    render(
      <AppContextProvider>
        <RequestEditor />
      </AppContextProvider>,
    );

    const placeholder = screen.getByPlaceholderText(PLACEHOLDER_REQ);
    expect(placeholder).toBeInTheDocument();
  });

  test("should render correct buttons.", () => {
    render(
      <AppContextProvider>
        <RequestEditor />
      </AppContextProvider>,
    );

    const buttonRequest = screen.getByTestId("button__request");
    const buttonPrettify = screen.getByTestId("button__prettify");

    expect(buttonRequest).toBeInTheDocument();
    expect(buttonPrettify).toBeInTheDocument();
  });

  test("should prettify request code.", () => {
    render(
      <AppContextProvider>
        <RequestEditor />
      </AppContextProvider>,
    );

    const editor = screen.getByPlaceholderText(PLACEHOLDER_REQ) as HTMLTextAreaElement;
    const prettifyButton = screen.getByTestId("button__prettify");

    expect(editor).toBeInTheDocument();
    expect(prettifyButton).toBeInTheDocument();

    fireEvent.change(editor, { target: { value: "query{}" } });
    fireEvent.click(prettifyButton);

    expect(editor.value).toEqual(prettifiedCodeMock);
  });

  test("should prettify variables code on click on Prettify button.", () => {
    render(
      <AppContextProvider>
        <RequestEditor />
      </AppContextProvider>,
    );

    const panelButton = screen.getByTestId("button-toggle");
    const prettifyButton = screen.getByTestId("button__prettify");

    fireEvent.click(panelButton);

    const editorVars = screen.getByPlaceholderText("Request variables...") as HTMLTextAreaElement;

    fireEvent.change(editorVars, { target: { value: jsonMock } });
    fireEvent.click(prettifyButton);

    expect(editorVars.value).toEqual(prettifiedJsonMock);
  });

  test("should prettify headers code on click on Prettify button.", () => {
    render(
      <AppContextProvider>
        <RequestEditor />
      </AppContextProvider>,
    );

    const headersButton = screen.getByTestId("headers");
    const prettifyButton = screen.getByTestId("button__prettify");

    fireEvent.click(headersButton);

    const editorHeaders = screen.getByPlaceholderText("Request headers...") as HTMLTextAreaElement;

    fireEvent.change(editorHeaders, { target: { value: headersMock } });
    fireEvent.click(prettifyButton);

    expect(editorHeaders.value).toEqual(prettifiedHeadersMock);
  });

  test("should render headers error if headers code is invalid JSON.", async () => {
    render(
      <AppContextProvider>
        <RequestEditor />
      </AppContextProvider>,
    );

    const editor = screen.getByPlaceholderText(PLACEHOLDER_REQ) as HTMLTextAreaElement;

    fireEvent.change(editor, { target: { value: queryCodeMock } });

    const buttonHeader = screen.getByTestId("headers");
    const buttonRequest = screen.getByTestId("button__request");

    fireEvent.click(buttonHeader);

    const editorHeaders = screen.getByPlaceholderText("Request headers...") as HTMLTextAreaElement;

    fireEvent.change(editorHeaders, { target: { value: "Invalid JSON" } });
    fireEvent.click(buttonRequest);

    expect(mockSetApiResponse).toHaveBeenCalledWith(QUERY_ERRORS.headers);
  });

  test("should render variables error if headers code is invalid JSON.", async () => {
    render(
      <AppContextProvider>
        <RequestEditor />
      </AppContextProvider>,
    );

    const editor = screen.getByPlaceholderText(PLACEHOLDER_REQ) as HTMLTextAreaElement;

    fireEvent.change(editor, { target: { value: queryCodeMock } });

    const buttonVariables = screen.getByTestId("variables");
    const buttonRequest = screen.getByTestId("button__request");

    fireEvent.click(buttonVariables);

    const editorVariables = screen.getByPlaceholderText(
      "Request variables...",
    ) as HTMLTextAreaElement;

    fireEvent.change(editorVariables, { target: { value: "Invalid code" } });
    fireEvent.click(buttonRequest);

    expect(mockSetApiResponse).toHaveBeenCalledWith(QUERY_ERRORS.variables);
  });
});
