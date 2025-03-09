import React from 'react';
import { Link } from 'react-router-dom';

const SongBar = ({ relatedTracks, i, artistId }) => (
  <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2`}>
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-20 rounded-lg"
        src={artistId ? relatedTracks?.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125') : relatedTracks?.images?.coverart}
        alt={relatedTracks?.title}
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
        {!artistId ? (
          <Link to={`/tracks/${relatedTracks.key}`}>
            <p className="text-xl font-bold text-white">
              {relatedTracks?.title}
            </p>
          </Link>
        ) : (
          <p className="text-xl font-bold text-white">
            {relatedTracks?.attributes?.name}
          </p>
        )}
        <p className="text-base text-gray-300 mt-1">
          {artistId ? relatedTracks?.attributes?.albumName : relatedTracks?.subtitle}
        </p>
      </div>
    </div>
  </div>
);

export default SongBar;