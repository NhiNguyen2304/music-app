import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { Error, Footer, Searchbar, Sidebar, TopPlay } from "./components";

import {
  Login,
  ForgotPassword,
  ArtistDetails,
  TopArtists,
  Profile,
  CountryTracks,
  Discover,
  Search,
  SongDetails,
  TopCharts,
  AboutUs,
  ContactUs,
  MusicTable,
} from "./routes";
import { useGetCountry } from "./api/geoAPI";

const App = () => {
  const { countryCode, countryName } = useGetCountry();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fixedUserId = 3;
  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#e76f51]">
        <Searchbar />

        <div className="rounded-lg px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/forget-password" element={<ForgotPassword />} />
              <Route path="/" element={<Discover />}/>
              <Route path="/discover" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route
                path="/around-you"
                element={
                  <CountryTracks
                    countryCode={countryCode}
                    countryName={countryName}
                  />
                }
              />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/tracks/:trackid" element={<SongDetails />} />
              <Route path="/search/:searching" element={<Search />} />
              <Route
                path="/profile"
                element={<Profile userId={fixedUserId} />}
              />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/list-charts-all" element={<MusicTable />} />
              <Route path="/error" element={<Error msg={`We can't find your searching info`} />}/>
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
        <div className="w-full mt-2">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
