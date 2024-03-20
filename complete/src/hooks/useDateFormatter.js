import { useTranslation } from "react-i18next";

const useDateFormatter = (options = {}) => {
  const { i18n } = useTranslation();
  const locale = i18n.resolvedLanguage;

  return new Intl.DateTimeFormat(locale, options).format;
};

export default useDateFormatter;
