import { useTranslation } from "react-i18next";
import useFetch from "./use-fetch";

const useHotAlbums = (limit = null) => {
  const { i18n } = useTranslation();
  const locale = i18n.resolvedLanguage;
  const url = `/assets/${locale}/hot-albums.json`;

  const { data, loading, error } = useFetch(url);
  const albums =
    data && limit ? data.slice(0, limit) : data;

  return { albums, loading, error };
};

export default useHotAlbums;
