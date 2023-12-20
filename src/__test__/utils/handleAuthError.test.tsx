import "@testing-library/react";

import { DICTIONARY } from "../../constants";
import { handleAuthError } from "../../utils";

const mockSetAuthError = jest.fn();

const lang = "en";
const errors = DICTIONARY[lang].formErrors;

const propsMock = {
  lang: lang,
  error: new Error("some error"),
  setAuthError: mockSetAuthError,
};

describe("handleAuthError function", () => {
  test("should set correct auth error when error message includes invalid-credential", async () => {
    propsMock.error = new Error("invalid-credential");

    handleAuthError(propsMock);
    expect(mockSetAuthError).toHaveBeenCalledWith(errors.auth_invalid_credentials);
  });

  test("should set correct auth error when error message includes email-already-in-use", async () => {
    propsMock.error = new Error("email-already-in-use");

    handleAuthError(propsMock);
    expect(mockSetAuthError).toHaveBeenCalledWith(errors.auth_email_in_use);
  });

  test("should set correct auth error for other error messages", async () => {
    propsMock.error = new Error("other error");

    handleAuthError(propsMock);
    expect(mockSetAuthError).toHaveBeenCalledWith(errors.auth_something_wrong);
  });
});
