import React from "react";
import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader } from "../components";

import { useGetArtistDetail } from "../api/shazamApi";

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { artistData, loading, error } = useGetArtistDetail(artistId);

  if (loading) return <Loader title="Loading artist details..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData?.data[0]} />
    </div>
  );
};

export default ArtistDetails;
