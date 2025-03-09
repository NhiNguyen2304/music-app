import React from "react";
import { useParams } from "react-router-dom";

import { Error, Loader, SongCard, S, Displaying } from "../components";
import { useGetSongsBySearch } from "../api/shazamApi";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const { searching } = useParams();
  const { loading, searchResult, error } = useGetSongsBySearch({
    searching
  });
  const navigateSearch = useNavigate();

  const songs = searchResult?.tracks?.hits.map((song) => song.track);

  if (loading) return <Loader title={`Searching ${searching}...`} />;

  if (error){
    navigateSearch("/error");
    return <Error />;
  } 

  if (searchResult == [])
    return <Displaying title={`We can't find any ${searching}`} />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Showing results for <span className="font-black">{searching}</span>
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, i) => (
          <SongCard key={song.key} track={song} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Search;
