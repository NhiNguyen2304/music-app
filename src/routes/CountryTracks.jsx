import { Error, Loader, SongCard } from "../components";
import { useGetSongByCountry } from "../api/shazamApi";

const CountryTracks = (props) => {
  const { chartsCountry, isLoadingTracksByCon, errorGetSongByCon } =
    useGetSongByCountry(props);

  if (isLoadingTracksByCon)
    return <Loader title="Loading Songs around you..." />;

  if (errorGetSongByCon) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Around you <span className="font-black">{props.countryName}</span>
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {chartsCountry?.map((track, i) => (
          <SongCard key={track.key} track={track} i={i} />
        ))}
      </div>
    </div>
  );
};

export default CountryTracks;
