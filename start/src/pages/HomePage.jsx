import { Link } from "react-router-dom";
import AlbumCard from "../components/AlbumCard";
import PostTeaser from "../components/PostTeaser";
import useHotAlbums from "../hooks/use-hot-albums";
import useTrendingPosts from "../hooks/use-trending-posts";

const HomePage = () => {
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

  if (loadingAlbums || loadingPosts) return <div>Loading...</div>;
  if (errorAlbums || errorPosts) return <div>Error loading data</div>;

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Hot Albums</h2>
        <div className="grid grid-cols-3 gap-4">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
        <div className="text-right mt-4">
          <Link
            to="/hot-albums"
            className="bg-gray-200 hover:bg-gray-100 text-slate-900 font-bold py-2 px-4 rounded"
          >
            View all 9 albums
          </Link>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Trending Posts</h2>
        <div className="grid grid-cols-2 gap-4">
          {posts.map((post) => (
            <PostTeaser key={post.id} post={post} />
          ))}
        </div>
        <div className="text-right mt-4">
          <Link
            to="/trending-posts"
            className="bg-gray-200 hover:bg-gray-100 text-slate-900 font-bold py-2 px-4 rounded"
          >
            View all 9 posts
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
