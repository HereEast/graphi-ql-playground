import * as yup from "yup";
import { DICTIONARY } from "../constants/dictionary";
import { IDictionary } from "../types";

export type LoginSchemaType = yup.ObjectSchema<{
  email: string;
  password: string;
}>;

export type RegisterSchemaType = yup.ObjectSchema<{
  name: string;
  email: string;
  password: string;
}>;

export function generateLoginSchema(lang: string): LoginSchemaType {
  const error = DICTIONARY[lang as keyof IDictionary].formErrors;

  return yup.object({
    email: yup
      .string()
      .required(error.email_required)
      .matches(/^[\w]+@([\w]+\.)+[\w]{2,}$/, error.email_pattern)
      .email(error.email_valid),
    password: yup
      .string()
      .required(error.password_required)
      .matches(/^(?=.*\d)(?=.*[A-Za-z])(?=.*\W).+$/, error.password_contain)
      .min(8, error.password__length),
  });
}

export function generateRegisterSchema(lang: string): RegisterSchemaType {
  const error = DICTIONARY[lang as keyof IDictionary].formErrors;

  return yup.object({
    name: yup.string().required(error.name_required),
    email: yup
      .string()
      .required(error.email_required)
      .matches(/^[\w]+@([\w]+\.)+[\w]{2,}$/, error.email_pattern)
      .email(error.email_valid),
    password: yup
      .string()
      .required(error.password_required)
      .matches(/^(?=.*\d)(?=.*[A-Za-z])(?=.*\W).+$/, error.password_contain)
      .min(8, error.password__length),
  });
}
