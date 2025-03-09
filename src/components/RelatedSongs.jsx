import React from "react";

import SongBar from "./SongBar";

const RelatedSongs = ({ relatedTracks, artistId }) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Related Songs:</h1>

    <div className="mt-6 w-full flex flex-col">
      {relatedTracks?.map((relatedTracks, i) => (
        <SongBar
          key={`${artistId}-${relatedTracks.key}-${i}`}
          relatedTracks={relatedTracks}
          i={i}
          artistId={artistId}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs;
