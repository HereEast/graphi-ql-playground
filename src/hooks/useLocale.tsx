import { useAppContext } from "./";
import { ICollection } from "../types";
import { DICTIONARY } from "../constants/dictionary";

export function useLocale(): ICollection {
  const { lang } = useAppContext();

  return DICTIONARY[lang as keyof typeof DICTIONARY];
}
