import { useState, useEffect } from "react";
import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetTopCharts, getMusicByGenre } from "../api/shazamApi";

const Discover = () => {
  const { tracks, loading, error } = useGetTopCharts();
  const [selectedGenre, setSelectedGenre] = useState('pop');
  const [isSelectedDefault, setIsSelectedDefault] = useState(true);
  const [trackList, setTrackList] = useState([]);

  useEffect(() => {
    async function fetchMusic() {
      const tracksByGenre = await getMusicByGenre(selectedGenre.toUpperCase());
      setTrackList(tracksByGenre);
      setIsSelectedDefault(false);
    }
    fetchMusic();
  }, [selectedGenre]);

  function handleGenreChange(event) {
    setSelectedGenre(event.target.value);
  }

  if (loading) return <Loader title="Loading..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {selectedGenre}
        </h2>
        <select
          id="genre-select"
          value={selectedGenre || 'POP'}
          onChange={handleGenreChange}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {isSelectedDefault == true
          ? tracks?.map((track, i) => (
              <SongCard key={track.key} track={track} i={i} />
            ))
          : trackList?.map((upTrack, j) => (
              <SongCard key={upTrack.key} track={upTrack} i={j} />
            ))}
      </div>
    </div>
  );
};

export default Discover;
