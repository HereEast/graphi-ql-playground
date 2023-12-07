export interface ILoginFormData {
  email: string;
  password: string;
}

export interface IRegisterFormData {
  name: string;
  email: string;
  password: string;
}

export type InputNames = "name" | "email" | "password";
export type InputTypes = "text" | "email" | "password";
