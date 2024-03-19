import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: (code) => {
      if (code.startsWith("en")) return ["en-US"];
      if (code.startsWith("ar")) return ["ar-EG"];
      return ["en-US"];
    },
    interpolation: {
      escapeValue: false,
    },
    debug: true,
  });

export default i18n;
