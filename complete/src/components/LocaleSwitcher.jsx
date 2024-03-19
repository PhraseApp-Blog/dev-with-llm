import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LocaleSwitcher = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    const newLang = event.target.value;
    const currentPath = window.location.pathname;

    // Assuming your paths follow the structure /:lang/some-path
    const newPath = currentPath.replace(
      /^\/[^/]+/,
      `/${newLang}`
    );

    navigate(newPath);
  };

  return (
    <div className="block -mt-1">
      <select
        onChange={changeLanguage}
        value={i18n.resolvedLanguage}
        className="bg-gray-200 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 px-4 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="en">English</option>
        <option value="ar">العربية</option>
      </select>
    </div>
  );
};

export default LocaleSwitcher;
