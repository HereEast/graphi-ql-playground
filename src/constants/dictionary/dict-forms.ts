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
