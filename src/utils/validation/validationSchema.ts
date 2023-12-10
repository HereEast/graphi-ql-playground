import * as yup from "yup";
import { INPUT_ERROR } from "../../constants/dictionary";

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
      .required(INPUT_ERROR[lang].email_required)
      .matches(/^[\w]+@([\w]+\.)+[\w]{2,}$/, INPUT_ERROR[lang].email_pattern)
      .email(INPUT_ERROR[lang].email_valid),
    password: yup
      .string()
      .required(INPUT_ERROR[lang].password_required)
      .matches(/^(?=.*\d)(?=.*[A-Za-z])(?=.*\W).+$/, INPUT_ERROR[lang].password_contain)
      .min(8, INPUT_ERROR[lang].password__length),
  });
}

function generateRegisterSchema(lang: string): RegisterSchemaType {
  return yup.object({
    name: yup.string().required(INPUT_ERROR[lang].name_required),
    email: yup
      .string()
      .required(INPUT_ERROR[lang].email_required)
      .matches(/^[\w]+@([\w]+\.)+[\w]{2,}$/, INPUT_ERROR[lang].email_pattern)
      .email(INPUT_ERROR[lang].email_valid),
    password: yup
      .string()
      .required(INPUT_ERROR[lang].password_required)
      .matches(/^(?=.*\d)(?=.*[A-Za-z])(?=.*\W).+$/, INPUT_ERROR[lang].password_contain)
      .min(8, INPUT_ERROR[lang].password__length),
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
