type FooterDictionaryType = {
  [key: string]: {
    title: string;
    subtitle: string;
    copy: string;
    linkSchool: string;
    linkCourse: string;
  };
};

export const FOOTER: FooterDictionaryType = {
  en: {
    title: "Hi👋👋👋",
    subtitle: "Here's the team:",
    copy: "(c) All rights are very much reserved.",
    linkSchool: "RS SCHOOL",
    linkCourse: "React Course",
  },
  ru: {
    title: "Хай👋👋👋",
    subtitle: "Скажите привет команде:",
    copy: "(с) Все права очень сильно защищены.",
    linkSchool: "Школа",
    linkCourse: "Курс по React",
  },
};
