import { IDictionary } from "../types";

export const DICTIONARY: IDictionary = {
  // EN
  en: {
    header: {
      loginLink: "Login",
      registerLink: "Register",
      productLink: "Playground",
      signOutLink: "Sign Out",
      menuButton: "Menu",
    },
    notFound: {
      title: "Sorry, page was not found",
      button: "Back to Home",
    },
    login: {
      title: "Hello again 👋",
      subtitle: "Please, log in to your account to use GraphiQL Playground.",
      button: "Log In",
      note: "Don't have an account? Please,",
      link: "register.",
    },
    register: {
      title: "Register 🤓",
      subtitle: "Please, create account to use GraphiQL Playground.",
      button: "Create Account",
      note: "Already have an account? Please,",
      link: "log in.",
    },
    input: {
      name: "Name",
      email: "Email",
      password: "Password",
      passwordButtonShow: "Show",
      passwordButtonHide: "Hide",
    },
    formErrors: {
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
    team: [
      {
        name: "Andrei Niasmachny",
        image: "/images/Andrei.jpg",
        github: "https://github.com/Andrew-Nes",
        description:
          "Spell checking isn’t a bad thing; it’s just unhelpful in this situation. Is something marked incorrect because it is incorrectly spelled or because the code is invalid? It’s tough to tell.",
        position: "Frontend Developer",
      },
      {
        name: "Mikita Razumau",
        image: "/images/Nikita.jpg",
        github: "https://github.com/razumaumikita",
        description:
          "Here’s another thing: the highlighted code cannot scroll while the editing is taking place. And when the textarea is scrolled, the highlighted code does not scroll with it.",
        position: "Frontend Developer",
      },
      {
        name: "Nastia Piven",
        image: "/images/Nastia.jpg",
        github: "https://github.com/HereEast",
        description:
          "One of the trickier things to adjust is how to handle line indentations in the result. The way the editor is currently set up, indenting lines with spaces works fine.",
        position: "Frontend Developer",
      },
    ],
    home: {
      heroTitle:
        "Hey there, welcome to the GraphiQL Playground! This is the go-to IDE for making GraphQL requests to various APIs.",
      heroPar:
        "Check out an extensive collection of characters, images, locations, and episodes - you'll have access to all the good stuff from The Rick and Morty TV show!",
      heroButtonLogin: "Log in to play",
      heroButtonPlay: "Try Playground",
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
    course: [
      "Components",
      "Routing",
      "Tests, Context API",
      "Redux. RTK",
      "NextJS, SSR/SSG",
      "Forms",
      "Technical React Interview, GraphiQL",
    ],
    footer: {
      title: "Hi👋👋👋",
      subtitle: "Here's the team:",
      copy: "(c) All rights are very much reserved.",
      linkSchool: "RS SCHOOL",
      linkCourse: "React Course",
    },
    tooltips: {
      request: "Execute request",
      prettify: "Prettify query",
      docs: "Documentation",
      hide: "Hide",
      show: "Show",
    },
    playground: {
      docButton: "Doc",
      saveButton: "Save",
    },
    loader: "Loading...",
  },
  // RU
  ru: {
    header: {
      loginLink: "Вход",
      registerLink: "Регистрация",
      productLink: "Песочница",
      signOutLink: "Выход",
      menuButton: "Меню",
    },
    notFound: {
      title: "Страница не найдена, извините",
      button: "На главную",
    },
    login: {
      title: "Привет 👋",
      subtitle: "Войдите в свой аккаунт, чтобы использовать Песочницу GraphiQL.",
      button: "Войти",
      note: "Все еще нет аккаунта?",
      link: "Создать аккаунт.",
    },
    register: {
      title: "Регистрация 🤓",
      subtitle: "Создайте аккаунт, чтобы использовать Песочницу GraphiQL.",
      button: "Создать аккаунт",
      note: "Уже есть аккаунт?",
      link: "Войти.",
    },
    input: {
      name: "Имя",
      email: "Имейл",
      password: "Пароль",
      passwordButtonShow: "Показать",
      passwordButtonHide: "Скрыть",
    },
    formErrors: {
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
    team: [
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
    home: {
      heroTitle:
        "Привет! Добро пожаловать в песочницу GraphiQL! Это идеальное место для отправки GraphQL запросов к разным API.",
      heroPar:
        "Здесь вы найдете обширную коллекцию персонажей, изображений, локаций и эпизодов — у вас будет доступ ко всему самому интересному из телешоу «Рик и Морти»!",
      heroButtonLogin: "Войти в аккаунт",
      heroButtonPlay: "Песочнница",
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
    course: [
      "Компонены",
      "Роутер",
      "Тесты, Context API",
      "Redux. RTK",
      "NextJS, SSR/SSG",
      "Формы",
      "Техническое интервью по React, GraphiQL",
    ],
    footer: {
      title: "Хай👋👋👋",
      subtitle: "Скажите привет команде:",
      copy: "(с) Все права очень сильно защищены.",
      linkSchool: "Школа",
      linkCourse: "Курс по React",
    },
    tooltips: {
      request: "Отправить запрос",
      prettify: "Форматировать запрос",
      docs: "Документация",
      hide: "Скрыть",
      show: "Показать",
    },
    playground: {
      docButton: "Док",
      saveButton: "Сохранить",
    },
    loader: "Загрузка...",
  },
};
