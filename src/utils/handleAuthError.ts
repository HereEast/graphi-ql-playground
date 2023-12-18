import { Dispatch, SetStateAction } from "react";
import { DICTIONARY } from "../constants";
import { IDictionary } from "../types";

export interface Props {
  lang: string;
  error: unknown;
  setAuthError: Dispatch<SetStateAction<string>>;
}

export function handleAuthError({ error, setAuthError, lang }: Props): void {
  if (!(error instanceof Error)) return;

  const errors = DICTIONARY[lang as keyof IDictionary].formErrors;

  if (error.message.includes("invalid-credential")) {
    setAuthError(errors.auth_invalid_credentials);
  } else if (error.message.includes("email-already-in-use")) {
    setAuthError(errors.auth_email_in_use);
  } else {
    setAuthError(errors.auth_something_wrong);
  }
}
