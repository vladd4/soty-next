import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { TranslationTypes } from "./translations/TranslationType";
import en from "./translations/en.json";
import uk from "./translations/uk.json";

const resources: Record<string, { translation: TranslationTypes }> = {
  en: { translation: en },
  uk: { translation: uk },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "uk",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
