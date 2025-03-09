import React from "react";

import { SongCard, Error, Loader, MusicChart } from "../components";
import { useGetTopCharts } from "../api/shazamApi";


const TopCharts = () => {
  const { tracks, loading, error } = useGetTopCharts();

  if (loading) return <Loader title="Loading Top charts..." />;

  if (error) return <Error />;

  const topPlays = tracks?.slice(0, 5);
  const labels = [];
  topPlays?.forEach((song) => {
    labels.push(song.title);
  });
  //console.log(songTitles);
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Discover Trending Charts</h2>
      <div className="flex flex-wrap sm:justify-start justify-center">
        <MusicChart labels={labels}/>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8 mt-4">
        {tracks?.map((track, i) => (
          <SongCard key={track.key} track={track} i={i} />
        ))}
      </div>
    </div>
  );
};

export default TopCharts;
