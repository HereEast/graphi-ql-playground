import * as yup from "yup";
import { FORM_ERROR } from "../constants/locale";

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
  return yup.object({
    email: yup
      .string()
      .required(FORM_ERROR[lang].email_required)
      .matches(/^[\w]+@([\w]+\.)+[\w]{2,}$/, FORM_ERROR[lang].email_pattern)
      .email(FORM_ERROR[lang].email_valid),
    password: yup
      .string()
      .required(FORM_ERROR[lang].password_required)
      .matches(/^(?=.*\d)(?=.*[A-Za-z])(?=.*\W).+$/, FORM_ERROR[lang].password_contain)
      .min(8, FORM_ERROR[lang].password__length),
  });
}

function generateRegisterSchema(lang: string): RegisterSchemaType {
  return yup.object({
    name: yup.string().required(FORM_ERROR[lang].name_required),
    email: yup
      .string()
      .required(FORM_ERROR[lang].email_required)
      .matches(/^[\w]+@([\w]+\.)+[\w]{2,}$/, FORM_ERROR[lang].email_pattern)
      .email(FORM_ERROR[lang].email_valid),
    password: yup
      .string()
      .required(FORM_ERROR[lang].password_required)
      .matches(/^(?=.*\d)(?=.*[A-Za-z])(?=.*\W).+$/, FORM_ERROR[lang].password_contain)
      .min(8, FORM_ERROR[lang].password__length),
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
