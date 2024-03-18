import useFetch from "./use-fetch";

const useHotAlbums = (limit = null) => {
  const { data, loading, error } = useFetch("/assets/hot-albums.json");
  const albums = data && limit ? data.slice(0, limit) : data;
  return { albums, loading, error };
};

export default useHotAlbums;
