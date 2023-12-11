import { FormErrorDictionaryType } from "../../types";

export const LOCALE_FORM_ERROR: FormErrorDictionaryType = {
  en: {
    name_required: "Name is required.",
    email_required: "Email is required.",
    email_valid: "Please, check you entered a valid email.",
    email_pattern: "Email must match the pattern: name@mail.com.",
    password_required: "Password is required.",
    password_contain: "Password must contain at least 1 digit, 1 letter and 1 special character.",
    password__length: "Min password length is 8 characters.",
    auth_invalid_credentials:
      "User with these credentials doesn't exist. Please, check email and password.",
    auth_something_wrong: "Something went wrong. Please, try again.",
    auth_email_in_use: "User with this email already exists.",
  },
  ru: {
    name_required: "Имя обязательно.",
    email_required: "Имейл обязателен.",
    email_valid: "Пожалуйста, убедитесь, что вы ввели правильный имейл.",
    email_pattern: "Имейл должен соответствовать шаблону: name@mail.com.",
    password_required: "Пароль обязателен.",
    password_contain:
      "Пароль должен содержать как минимум 1 цифру, 1 букву и 1 специальный символ.",
    password__length: "Минимальная длина пароля - 8 символов.",
    auth_invalid_credentials: "Такого пользователя не существует. Проверьте имейл и пароль.",
    auth_something_wrong: "Что-то пошло не так. Попробуйте еще раз.",
    auth_email_in_use: "Пользователь с таким имейлом уже существует.",
  },
};
