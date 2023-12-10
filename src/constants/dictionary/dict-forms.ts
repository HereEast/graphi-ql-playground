type InputDictionaryType = {
  [key: string]: {
    name?: string;
    email: string;
    password: string;
    passwordButtonShow?: string;
    passwordButtonHide?: string;
  };
};

type FormDictionaryType = {
  [key: string]: {
    title: string;
    subtitle: string;
    button: string;
    note: string;
    link: string;
  };
};

type InputErrorDictionaryType = {
  [key: string]: {
    name_required: string;
    email_required: string;
    email_valid: string;
    email_pattern: string;
    password_required: string;
    password_contain: string;
    password__length: string;
  };
};

export const INPUT_ERROR: InputErrorDictionaryType = {
  en: {
    name_required: "Name is required.",
    email_required: "Email is required.",
    email_valid: "Please, check you entered a valid email.",
    email_pattern: "Email must match the pattern: name@mail.com.",
    password_required: "Password is required.",
    password_contain: "Password must contain at least 1 digit, 1 letter and 1 special character.",
    password__length: "Min password length is 8 characters.",
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
  },
};

export const INPUT: InputDictionaryType = {
  en: {
    name: "Name",
    email: "Email",
    password: "Password",
    passwordButtonShow: "Show",
    passwordButtonHide: "Hide",
  },
  ru: {
    name: "Имя",
    email: "Имейл",
    password: "Пароль",
    passwordButtonShow: "Показать",
    passwordButtonHide: "Скрыть",
  },
};

export const LOGIN: FormDictionaryType = {
  en: {
    title: "Hello again 👋",
    subtitle: "Please, log in to use GraphiQL Playground.",
    button: "Log In",
    note: "Don't have an account? Please,",
    link: "register.",
  },
  ru: {
    title: "Привет 👋",
    subtitle: "Войдите в свой аккаунт, чтобы использовать Песочницу GraphiQL.",
    button: "Войти",
    note: "Все еще нет аккаунта? Тогда",
    link: "зарегистируйтесь.",
  },
};

export const REGISTER: FormDictionaryType = {
  en: {
    title: "Register 🤓",
    subtitle: "Please, create account to use GraphiQL Playground.",
    button: "Create Account",
    note: "Already have an account? Please,",
    link: "log in.",
  },
  ru: {
    title: "Регистрация 🤓",
    subtitle: "Создайте аккаунт, чтобы использовать Песочницу GraphiQL.",
    button: "Создать аккаунт",
    note: "Уже есть аккаунт? Тогда",
    link: "войдите.",
  },
};
