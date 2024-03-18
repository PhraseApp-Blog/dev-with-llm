import useTrendingPosts from "../hooks/use-trending-posts";
import PostTeaser from "../components/PostTeaser"; // Import the PostTeaser component

const TrendingPosts = () => {
  const { posts, loading, error } = useTrendingPosts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Trending Posts</h2>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <PostTeaser key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts;
