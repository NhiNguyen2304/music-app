import React from "react";
import { Error, Loader, ArtistCard } from "../components";
import { useGetTopCharts } from "../api/shazamApi";

const TopArtists = () => {
  const { tracks, loading, error } = useGetTopCharts();

  if (loading) return <Loader title="Loading Trending Artists" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Discover Trending Artists
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {tracks?.map((track) => (
          <ArtistCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
