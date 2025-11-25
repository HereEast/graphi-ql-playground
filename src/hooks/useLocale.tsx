import { useAppContext } from "./";
import { DICTIONARY } from "../constants/dictionary";
import { ICollection, IDictionary } from "../types";

export function useLocale(): ICollection {
  const { lang } = useAppContext();

  return DICTIONARY[lang as keyof IDictionary];
}
