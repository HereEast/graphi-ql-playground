import { Dispatch, SetStateAction } from "react";
import { FORM_ERROR } from "../constants/locale";

export interface Props {
  lang: string;
  error: unknown;
  setAuthError: Dispatch<SetStateAction<string>>;
}

export function handleAuthError({ error, setAuthError, lang }: Props): void {
  if (!(error instanceof Error)) return;

  if (error.message.includes("invalid-credential")) {
    setAuthError(FORM_ERROR[lang].auth_invalid_credentials);
  } else if (error.message.includes("email-already-in-use")) {
    setAuthError(FORM_ERROR[lang].auth_email_in_use);
  } else {
    setAuthError(FORM_ERROR[lang].auth_something_wrong);
  }
}
