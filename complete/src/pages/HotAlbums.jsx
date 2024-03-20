import useHotAlbums from "../hooks/use-hot-albums";
import AlbumCard from "../components/AlbumCard"; // Import the AlbumCard component
import { useTranslation } from "react-i18next";

const HotAlbums = () => {
  const { t } = useTranslation();
  const { albums, loading, error } = useHotAlbums();

  if (loading) return <div>{t("loading")}</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">
        {t("hotAlbums.title")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};

export default HotAlbums;
