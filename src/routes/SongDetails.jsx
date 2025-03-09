import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { useGetSongDetails, useGetRelatedSong } from "../api/shazamApi";

const SongDetails = () => {
  const { trackid, id: artistId } = useParams();
  const { trackDetail, loading } = useGetSongDetails({ trackid });
  const { realtedTracks, loadingRelated, error } = useGetRelatedSong({
    trackid,
  });

  if (loading) return <Loader title="Loading Lyrics..." />;

  if (loadingRelated) return <Loader title="Searching related songs..." />;

  if (error) return <Error />;

  //console.log(trackDetail);

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} trackDetail={trackDetail} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics: </h2>
        <div className="mt-5">
          {trackDetail?.sections[1].type === "LYRICS" ? (
            trackDetail?.sections[1]?.text.map((line, i) => (
              <p
                key={`lyrics-${line}-${i}`}
                className="text-gray-400 text-base my-1"
              >
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">
              Sorry, No lyrics found!
            </p>
          )}
        </div>
      </div>

      <RelatedSongs relatedTracks={realtedTracks} artistId={artistId} />
    </div>
  );
};

export default SongDetails;
