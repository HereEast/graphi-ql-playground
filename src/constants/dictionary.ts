export type DictionaryType = {
  [key: string]: {
    LINK_LOGIN: string;
    LINK_REGISTER: string;
    LINK_PLAYGROUND: string;
    LINK_SIGNOUT: string;
    BUTTON_MENU: string;
  };
};

export const HEADER: DictionaryType = {
  en: {
    LINK_LOGIN: "Login",
    LINK_REGISTER: "Register",
    LINK_PLAYGROUND: "Playground",
    LINK_SIGNOUT: "Sign Out",
    BUTTON_MENU: "Menu",
  },
  ru: {
    LINK_LOGIN: "Вход",
    LINK_REGISTER: "Регистрация",
    LINK_PLAYGROUND: "Песочница",
    LINK_SIGNOUT: "Выход",
    BUTTON_MENU: "Меню",
  },
};

export const COURSE_DATA = [
  {
    title: "Components",
  },
  {
    title: "Routing",
  },
  {
    title: "Tests, Context API",
  },
  {
    title: "Redux. RTK",
  },
  {
    title: "NextJS, SSR/SSG",
  },
  {
    title: "Forms",
  },
  {
    title: "Technical React Interview, GraphiQL",
  },
];
