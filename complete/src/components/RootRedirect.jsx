import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const RootRedirect = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    // Determine the default or detected language
    const defaultOrDetectedLang = i18n.language || "en";
    // Redirect to the route with the default or detected language
    navigate(`/${defaultOrDetectedLang}`, {
      replace: true,
    });
  }, [navigate, i18n.language]);

  return null;
};

export default RootRedirect;
