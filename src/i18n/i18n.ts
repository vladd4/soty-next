import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { TranslationTypes } from "./translations/TranslationType";
import en from "./translations/en.json";
import uk from "./translations/uk.json";

const resources: Record<string, { translation: TranslationTypes }> = {
  en: { translation: en },
  uk: { translation: uk },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
    fallbackLng: "uk",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
