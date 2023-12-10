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
export type InputDictionaryType = {
  [key: string]: {
    name?: string;
    email: string;
    password: string;
    passwordButtonShow?: string;
    passwordButtonHide?: string;
  };
};

export type FormDictionaryType = {
  [key: string]: {
    loginTitle: string;
    loginSubtitle: string;
    loginButton: string;
    loginNote: string;
    loginLink: string;
    registerTitle: string;
    registerSubtitle: string;
    registerButton: string;
    registerNote: string;
    registerLink: string;
  };
};

export type FormErrorDictionaryType = {
  [key: string]: {
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
  };
};

export type NotFoundDictionaryType = {
  [key: string]: {
    title: string;
    button: string;
  };
};

export type FooterDictionaryType = {
  [key: string]: {
    title: string;
    subtitle: string;
    copy: string;
    linkSchool: string;
    linkCourse: string;
  };
};

export type HeaderDictionaryType = {
  [key: string]: {
    LINK_LOGIN: string;
    LINK_REGISTER: string;
    LINK_PLAYGROUND: string;
    LINK_SIGNOUT: string;
    BUTTON_MENU: string;
  };
};

export type HomeDictionaryType = {
  [key: string]: {
    heroTitle: string;
    heroLink: string;
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
  };
};

export type CourseDictionaryType = {
  [key: string]: string[];
};

export type TeamMember = {
  name: string;
  image: string;
  github: string;
  description: string;
  position: string;
};

export type TeamDictionaryType = {
  [key: string]: TeamMember[];
};
