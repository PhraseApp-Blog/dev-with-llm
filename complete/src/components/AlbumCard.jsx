import PropTypes from "prop-types";
import useDateFormatter from "../hooks/useDateFormatter";

const AlbumCard = ({ album }) => {
  const formatDate = useDateFormatter();

  return (
    <div className="p-4 border border-slate-700 bg-slate-900 rounded-lg shadow-md lg:w-[320px]">
      <img
        src={album.coverUrl}
        alt={album.title}
        className="w-[300px] h-[300px] object-cover rounded-md"
      />
      <h3 className="mt-2 text-xl font-semibold">
        {album.title}
      </h3>
      <p className="text-gray-300">{album.artist}</p>
      <div className="mt-1 text-sm text-gray-400">
        {formatDate(new Date(album.releaseDate))}
      </div>
    </div>
  );
};

AlbumCard.propTypes = {
  album: PropTypes.shape({
    coverUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default AlbumCard;
