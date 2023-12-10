type NotFoundDictionaryType = {
  [key: string]: {
    title: string;
    button: string;
  };
};

export const NOT_FOUND: NotFoundDictionaryType = {
  en: {
    title: "Sorry, page was not found",
    button: "Back to Home",
  },
  ru: {
    title: "Страница не найдена, извините",
    button: "На главную",
  },
};
