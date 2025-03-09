import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { useGetTopCharts } from "../api/shazamApi";

import "swiper/css";
import "swiper/css/free-mode";

const TopChartCard = ({ tracks, i }) => (
  <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-20 rounded-lg"
        src={tracks?.images?.coverart}
        alt={tracks?.title}
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link to={`/tracks/${tracks.key}`}>
          <p className="text-xl font-bold text-white">{tracks?.title}</p>
        </Link>
        <Link to={`/artists/${tracks?.artists[0].adamid}`}>
          <p className="text-base text-gray-300 mt-1">{tracks?.subtitle}</p>
        </Link>
      </div>
    </div>
  </div>
);

const TopPlay = () => {
  const { tracks } = useGetTopCharts();
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  // Only display top 5 songs, Use see more to get all top songs
  const topPlays = tracks?.slice(0, 5);
  //console.log(topPlays);

  return (
    <div
      ref={divRef}
      className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flwx flex-col"
    >
      <div className="w-full flex flex-col mt-8">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold">Trending Artists</h2>
          <Link to="/top-artists">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>

        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className=""
        >
          {topPlays?.map((tracks, i) => (
            <SwiperSlide
              key={tracks?.key}
              style={{ width: "25%", height: "auto" }}
              className="shadow-lg rounded-full animate-slideright"
            >
              <Link to={`/artists/${tracks?.artists[0].adamid}`}>
                <img
                  src={tracks?.images?.background}
                  alt="name"
                  className="rounded-full w-full object-cover"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full flex flex-col mt-2">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold">Hot hits</h2>
          <Link to="/list-charts-all">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map((tracks, i) => (
            <TopChartCard key={tracks.key} tracks={tracks} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPlay;
