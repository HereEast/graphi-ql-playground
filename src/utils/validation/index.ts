import * as yup from "yup";

export const loginValidationSchema = yup.object({
  email: yup
    .string()
    .required("Email is required.")
    .matches(/^[\w]+@([\w]+\.)+[\w]{2,}$/, "Password must match the pattern: name@mail.com.")
    .email("Please, check you entered a valid email."),
  password: yup
    .string()
    .required("Password is required.")
    .matches(
      /^(?=.*\d)(?=.*[A-Za-z])(?=.*\W).+$/,
      "Password must contain at least 1 digit, 1 letter and 1 special character.",
    )
    .min(8, "Min password length is 8 characters."),
});

export const registerValidationSchema = yup.object({
  name: yup.string().required("Name is required."),
  email: yup
    .string()
    .required("Email is required.")
    .matches(/^[\w]+@([\w]+\.)+[\w]{2,}$/, "Password must match the pattern: name@mail.com.")
    .email("Please, check you entered a valid email."),
  password: yup
    .string()
    .required("Password is required.")
    .matches(
      /^(?=.*\d)(?=.*[A-Za-z])(?=.*\W).+$/,
      "Password must contain at least 1 digit, 1 letter and 1 special character.",
    )
    .min(8, "Min password length is 8 characters."),
});
