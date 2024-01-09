export interface ILoginFormData {
  email: string;
  password: string;
}

export interface IRegisterFormData {
  name: string;
  email: string;
  password: string;
}

// Dictionary
export interface IHeader {
  loginLink: string;
  registerLink: string;
  productLink: string;
  signOutLink: string;
  menuButton: string;
}

export interface INotFound {
  title: string;
  button: string;
}

export interface ILogin {
  title: string;
  subtitle: string;
  button: string;
  note: string;
  link: string;
}

export interface IRegister {
  title: string;
  subtitle: string;
  button: string;
  note: string;
  link: string;
}

export interface IInput {
  name: string;
  email: string;
  password: string;
  passwordButtonShow: string;
  passwordButtonHide: string;
}

export interface IFormErrors {
  name_required: string;
  email_required: string;
  email_valid: string;
  email_pattern: string;
  password_required: string;
  password_contain: string;
  password__length: string;
  auth_invalid_credentials: string;
  auth_something_wrong: string;
  auth_email_in_use: string;
}

export interface ITeamMember {
  name: string;
  image: string;
  github: string;
  description: string;
  position: string;
}

export interface IHome {
  heroTitle: string;
  heroPar: string;
  heroButtonLogin: string;
  heroButtonPlay: string;
  courseTag: string;
  courseTitle: string;
  coursePar1: string;
  coursePar2: string;
  courseLink: string;
  weekTitle: string;
  teamTitle: string;
}

export interface IFooter {
  title: string;
  subtitle: string;
  copy: string;
  linkSchool: string;
  linkCourse: string;
}

export interface ITooltips {
  request: string;
  prettify: string;
  docs: string;
}

export interface IPlayground {
  docButton: string;
}

export interface ICollection {
  header: IHeader;
  notFound: INotFound;
  login: ILogin;
  register: IRegister;
  input: IInput;
  formErrors: IFormErrors;
  team: ITeamMember[];
  home: IHome;
  course: string[];
  footer: IFooter;
  tooltips: ITooltips;
  playground: IPlayground;
  loader: string;
}

export interface IDictionary {
  en: ICollection;
  ru: ICollection;
}
