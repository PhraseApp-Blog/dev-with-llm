import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const supportedLngs = {
  en: "English",
  ar: "Arabic",
  zh: "Chinese",
};
const fallbackLng = "en";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng,
    interpolation: {
      escapeValue: false,
    },
    debug: true,
  });

export { i18n, supportedLngs, fallbackLng };
