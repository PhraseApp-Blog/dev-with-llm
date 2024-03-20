import { useEffect } from "react";
import {
  useParams,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { supportedLngs, fallbackLng } from "../i18n";

const LocaleWrapper = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      const newLang = supportedLngs.includes(lang)
        ? lang
        : fallbackLng;
      i18n.changeLanguage(newLang);
    }
  }, [lang, i18n]);

  if (!lang) {
    const detectedLang = i18n.language || "en";
    return <Navigate to={`/${detectedLang}`} replace />;
  }

  return <Outlet />;
};

LocaleWrapper.propTypes = {
  children: PropTypes.node,
};

export default LocaleWrapper;
