import { useEffect } from "react";
import {
  useParams,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { supportedLngs, fallbackLng } from "../i18n";

const LocaleWrapper = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      const newLang = Object.keys(supportedLngs).includes(
        lang
      )
        ? lang
        : fallbackLng;
      i18n.changeLanguage(newLang);
    }
  }, [lang, i18n]);

  if (!lang) {
    const detectedLang = i18n.language || fallbackLng;
    return <Navigate to={`/${detectedLang}`} replace />;
  }

  return <Outlet />;
};

export default LocaleWrapper;
