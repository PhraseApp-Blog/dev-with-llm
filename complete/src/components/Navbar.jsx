import { useTranslation } from "react-i18next";
import LocaleSwitcher from "./LocaleSwitcher";
import LocalizedLink from "./LocalizedLink";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="p-4 border-b border-slate-700 bg-slate-900">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">
          {t("appName")}
        </h1>
        <ul className="flex space-x-4">
          <li>
            <LocalizedLink
              to="/"
              className="text-gray-300 hover:text-white"
            >
              {t("nav.home")}
            </LocalizedLink>
          </li>
          <li>
            <LocalizedLink
              to="/hot-albums"
              className="text-gray-300 hover:text-white"
            >
              {t("nav.hotAlbums")}
            </LocalizedLink>
          </li>
          <li>
            <LocalizedLink
              to="/trending-posts"
              className="text-gray-300 hover:text-white"
            >
              {t("nav.trendingPosts")}
            </LocalizedLink>
          </li>
          <li>
            <LocaleSwitcher />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
