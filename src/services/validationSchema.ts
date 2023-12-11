import * as yup from "yup";
import { DICTIONARY } from "../constants/dictionary";

type LoginSchemaType = yup.ObjectSchema<{
  email: string;
  password: string;
}>;

type RegisterSchemaType = yup.ObjectSchema<{
  name: string;
  email: string;
  password: string;
}>;

function generateLoginSchema(lang: string): LoginSchemaType {
  const error = DICTIONARY[lang as keyof typeof DICTIONARY].formErrors;

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

function generateRegisterSchema(lang: string): RegisterSchemaType {
  const error = DICTIONARY[lang as keyof typeof DICTIONARY].formErrors;

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

export const loginSchema = {
  en: generateLoginSchema("en"),
  ru: generateLoginSchema("ru"),
};

export const registerSchema = {
  en: generateRegisterSchema("en"),
  ru: generateRegisterSchema("ru"),
};
