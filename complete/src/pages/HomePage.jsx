import AlbumCard from "../components/AlbumCard";
import PostTeaser from "../components/PostTeaser";
import useHotAlbums from "../hooks/use-hot-albums";
import useTrendingPosts from "../hooks/use-trending-posts";
import { useTranslation } from "react-i18next";
import LocalizedLink from "../components/LocalizedLink";

const HomePage = () => {
  const { t } = useTranslation();

  const {
    albums,
    loading: loadingAlbums,
    error: errorAlbums,
  } = useHotAlbums(3);
  const {
    posts,
    loading: loadingPosts,
    error: errorPosts,
  } = useTrendingPosts(4);

  if (loadingAlbums || loadingPosts)
    return <div>{t("loading")}</div>;
  if (errorAlbums || errorPosts)
    return <div>Error loading data</div>;

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {t("home.hotAlbumsTitle")}
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
        <div className="text-right mt-4">
          <LocalizedLink
            to="/hot-albums"
            className="bg-gray-200 hover:bg-gray-100 text-slate-900 font-bold py-2 px-4 rounded"
          >
            {t("home.viewAllAlbums", { count: 9 })}
          </LocalizedLink>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {t("home.trendingPostsTitle")}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {posts.map((post) => (
            <PostTeaser key={post.id} post={post} />
          ))}
        </div>
        <div className="text-right mt-4">
          <LocalizedLink
            to="/trending-posts"
            className="bg-gray-200 hover:bg-gray-100 text-slate-900 font-bold py-2 px-4 rounded"
          >
            {t("home.viewAllPosts", { count: 9 })}
          </LocalizedLink>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
