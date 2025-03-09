import { Link } from "react-router-dom";

const SongCard = ({ track, i }) => {
  const tempSong = "Test";

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            tempSong?.title === track.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        ></div>
        <img
          alt="track_img"
          src={track.images?.coverart}
          className="w-full h-full rounded-lg"
        />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/tracks/${track?.key}`}>{track.title}</Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link
            to={
              track.artists
                ? `/artists/${track?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {track.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
