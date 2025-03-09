import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, trackDetail }) => (
  <div className="relative w-full flex flex-col">
    <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />

    <div className="absolute inset-0 flex items-center">
      <img
        alt="profile"
        src={
          artistId
            ? artistData?.avatar.replace("{w}", "500").replace("{h}", "500")
            : trackDetail?.images?.coverart
        }
        className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
      />

      <div className="ml-5">
        <p className="font-bold sm:text-3xl text-xl text-white">
          {artistId ? artistData?.attributes?.name : trackDetail?.title}
        </p>
        {!artistId && (
          <Link to={`/artists/${trackDetail?.artists[0]?.adamid}`}>
            <p className="text-base text-gray-400 mt-2">
              {trackDetail?.subtitle}
            </p>
          </Link>
        )}

        <p className="text-base text-gray-400 mt-2">
          {artistId
            ? artistData?.attributes?.genreNames[0]
            : trackDetail?.genres?.primary}
        </p>
      </div>
    </div>
  </div>
);

export default DetailsHeader;
