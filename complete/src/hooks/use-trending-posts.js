import useFetch from "./use-fetch";

const useTrendingPosts = (limit = null) => {
  const { data, loading, error } = useFetch("/assets/trending-posts.json");
  const posts = data && limit ? data.slice(0, limit) : data;
  return { posts, loading, error };
};

export default useTrendingPosts;
