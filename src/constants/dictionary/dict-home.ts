type HomeDictionaryType = {
  [key: string]: {
    courseTag: string;
    courseTitle: string;
    coursePar1: string;
    coursePar2: string;
    courseLink: string;
    weekTitle: string;
    teamTitle: string;
  };
};

type CourseDictionaryType = {
  [key: string]: string[];
};

export const HOME: HomeDictionaryType = {
  en: {
    courseTag: "RS School",
    courseTitle: "React Course",
    coursePar1:
      "This course is perfect for students with experience in JavaScript, TypeScript, Git, GitHub, NPM, Webpack, CSS3, HTML5 and an understanding of interacting with APIs.",
    coursePar2:
      "The course runs for a total of 10 weeks, with 6 weeks dedicated to studying React and an additional 4 weeks for the final task implementation.",
    courseLink: "Learn more",
    weekTitle: "Week",
    teamTitle: "Team",
  },
  ru: {
    courseTag: "Школа",
    courseTitle: "Курс по React",
    coursePar1:
      "Этот курс отлично подходит для студентов с опытом работы с JavaScript, TypeScript, Git, GitHub, NPM, Webpack, CSS3, HTML5, а также пониманием взаимодействия с API.",
    coursePar2:
      "Курс длится 10 недель, 6 из которых выделены под изучение React, а еще 4 недели отведены на выполнение финального задания.",
    courseLink: "Узнать больше",
    weekTitle: "Неделя",
    teamTitle: "Команда",
  },
};

export const COURSE: CourseDictionaryType = {
  en: [
    "Components",
    "Routing",
    "Tests, Context API",
    "Redux. RTK",
    "NextJS, SSR/SSG",
    "Forms",
    "Technical React Interview, GraphiQL",
  ],
  ru: [
    "Компонены",
    "Роутер",
    "Тесты, Context API",
    "Redux. RTK",
    "NextJS, SSR/SSG",
    "Формы",
    "Техническое интервью по React, GraphiQL",
  ],
};
