export type TeamMember = {
  name: string;
  image: string;
  github: string;
  description: string;
  position: string;
};

export type TeamType = {
  [key: string]: TeamMember[];
};

export const TEAM: TeamType = {
  en: [
    {
      name: "Andrei Niasmachny",
      image: "/images/Andrei.jpg",
      github: "https://github.com/Andrew-Nes",
      description:
        "The course runs for a total of 10 weeks, with 6 weeks dedicated to studying React and an additional 4 weeks for the final task implementation.",
      position: "Frontend Developer",
    },
    {
      name: "Mikita Razumau",
      image: "/images/Nikita.jpg",
      github: "https://github.com/razumaumikita",
      description:
        "The course runs for a total of 10 weeks, with 6 weeks dedicated to studying React and an additional 4 weeks for the final task implementation.",
      position: "Frontend Developer",
    },
    {
      name: "Nastia Piven",
      image: "/images/Nastia.jpg",
      github: "https://github.com/HereEast",
      description:
        "The course runs for a total of 10 weeks, with 6 weeks dedicated to studying React and an additional 4 weeks for the final task implementation.",
      position: "Frontend Developer",
    },
  ],
  ru: [
    {
      name: "Андрей Несмачный",
      image: "/images/Andrei.jpg",
      github: "https://github.com/Andrew-Nes",
      description:
        "Pantone объявил главный цвет 2024 года — персиковый Peach Fuzz. Как говорят в институте, это «теплый и уютный оттенок, подчеркивающий наше стремление к единению с окружающим миром». Вспоминаем, как цвет года влияет на нашу жизнь.",
      position: "Фронтенд Девелопер",
    },
    {
      name: "Никита Разумов",
      image: "/images/Nikita.jpg",
      github: "https://github.com/razumaumikita",
      description:
        "Pantone объявил главный цвет 2024 года — персиковый Peach Fuzz. Как говорят в институте, это «теплый и уютный оттенок, подчеркивающий наше стремление к единению с окружающим миром». Вспоминаем, как цвет года влияет на нашу жизнь.",
      position: "Фронтенд Девелопер",
    },
    {
      name: "Настя Пивень",
      image: "/images/Nastia.jpg",
      github: "https://github.com/HereEast",
      description:
        "Pantone объявил главный цвет 2024 года — персиковый Peach Fuzz. Как говорят в институте, это «теплый и уютный оттенок, подчеркивающий наше стремление к единению с окружающим миром». Вспоминаем, как цвет года влияет на нашу жизнь.",
      position: "Фронтенд Девелопер",
    },
  ],
};
