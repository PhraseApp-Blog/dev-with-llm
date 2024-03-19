import useTrendingPosts from "../hooks/use-trending-posts";
import PostTeaser from "../components/PostTeaser"; // Import the PostTeaser component
import { useTranslation } from "react-i18next";

const TrendingPosts = () => {
  const { t } = useTranslation();
  const { posts, loading, error } = useTrendingPosts();

  if (loading) return <div>{t("loading")}</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">
        {t("trendingPosts.title")}
      </h2>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <PostTeaser key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts;
