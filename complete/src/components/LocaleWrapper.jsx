import { useEffect } from "react";
import {
  useParams,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const LocaleWrapper = () => {
  const { lang } = useParams();
  console.log({ lang });
  const { i18n } = useTranslation();

  useEffect(() => {
    // If there's a lang param and it's different from the current language, update it
    if (lang && i18n.language !== lang) {
      const supportedLanguages = ["en", "ar"]; // Extend this list as needed
      const fallbackLanguage = "en";
      const newLang = supportedLanguages.includes(lang)
        ? lang
        : fallbackLanguage;
      i18n.changeLanguage(newLang);
    }
  }, [lang, i18n]);

  // Redirect to a default language route if no lang param is present
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
