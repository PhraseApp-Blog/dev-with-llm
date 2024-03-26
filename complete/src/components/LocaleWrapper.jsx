import { useEffect } from "react";
import {
  useParams,
  useLocation,
  useNavigate,
  Outlet,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { supportedLngs, fallbackLng } from "../i18n";

const LocaleWrapper = () => {
  const { lang } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (!Object.keys(supportedLngs).includes(lang)) {
      const currentLang = i18n.language || fallbackLng;
      const intendedPath = location.pathname;
      const newPath = `/${currentLang}${intendedPath}`;
      navigate(newPath, { replace: true });
    } else if (lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n, navigate, location.pathname]);

  return <Outlet />;
};

export default LocaleWrapper;
