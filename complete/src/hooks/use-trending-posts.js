import { useTranslation } from "react-i18next";
import useFetch from "./use-fetch";

const useTrendingPosts = (limit = null) => {
  const { i18n } = useTranslation();
  const locale = i18n.resolvedLanguage;
  const url = `/assets/${locale}/trending-posts.json`;

  const { data, loading, error } = useFetch(url);
  const posts = data && limit ? data.slice(0, limit) : data;

  return { posts, loading, error };
};

export default useTrendingPosts;
