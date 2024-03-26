import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold my-4">
        {t("notFound.title")}
      </h1>
      <p className="text-lg">{t("notFound.message")}</p>
    </div>
  );
};

export default NotFound;
