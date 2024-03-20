import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const PostTeaser = ({ post }) => {
  const { t } = useTranslation();

  return (
    <article className="p-4 border border-slate-700 bg-slate-900 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">
        {post.title}
      </h3>
      <p className="text-gray-300">{post.excerpt}</p>
      <div className="mt-2 text-sm text-gray-400">
        {t("postTeaser.authorAndDate", {
          author: post.author,
          date: new Date(post.date),
        })}
      </div>
    </article>
  );
};

PostTeaser.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostTeaser;
