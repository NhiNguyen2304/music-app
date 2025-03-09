import { useState, useEffect } from "react";

const API_KEY = "bfd1c53b96msh9365d98420b6d9ap116216jsn55333ca61aba";
const HOST = "shazam-core.p.rapidapi.com";

export function useGetTopCharts() {
  const [loading, setLoading] = useState(true);
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://shazam-core.p.rapidapi.com/v1/charts/genre-world?genre_code=POP";
      const headers = {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": HOST,
      };

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: headers,
        });
        setLoading(false);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        let data = await response.json();
        setTracks(data);
      } catch (error) {
        console.error(error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    tracks,
    loading,
    error,
  };
}

export function useGetTopChartsByGenre(genre) {
  const [loadingCharts, setLoadingCharts] = useState(true);
  const [tracksByGenre, setTracksByGenre] = useState([]);
  const [errorChartsByGenre, setErrorChartsByGenre] = useState(null);

  (async () => {
    try {
      setTracksByGenre(await getMusicByGenre(genre));
      setLoadingCharts(false);
    } catch (err) {
      setErrorChartsByGenre(err);
      setLoadingCharts(false);
    }
  })();

  return {
    tracksByGenre,
    loadingCharts,
    errorChartsByGenre,
  };
}

export async function getMusicByGenre(genre = POP) {
  const url = `https://shazam-core.p.rapidapi.com/v1/charts/genre-world?genre_code=${genre}`;
  const options = {
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": HOST,
    },
  };
  const response = await fetch(url, options);
  let data = await response.json();
  return data;
}

export function useGetSongDetails(trackid) {
  const [loading, setLoading] = useState(true);
  const [trackDetail, setTrackDetail] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://shazam-core.p.rapidapi.com/v1/tracks/details?track_id=${trackid.trackid}`;
      const headers = {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": HOST,
      };
      //console.log(url);

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: headers,
        });
        setLoading(false);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        let data = await response.json();
        setTrackDetail(data);
      } catch (error) {
        console.error(error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    trackDetail,
    loading,
    error,
  };
}

export function useGetRelatedSong(trackid) {
  const [loading, setLoading] = useState(true);
  const [realtedTracks, setRelatedTracks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://shazam-core.p.rapidapi.com/v1/tracks/related?track_id=${trackid.trackid}`;
      const headers = {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": HOST,
      };
      //console.log(url);

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: headers,
        });
        setLoading(false);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        let data = await response.json();
        //console.log(data);
        //let trackDetail = data;
        //console.log(trackDetail);
        // trackDetail.map((data) => {
        //     lyrics: data.resources.lyrics;
        //     // images: track.images;
        //     // singer: track.subtitle;
        //     // url: track.url;

        // })
        setRelatedTracks(data);
      } catch (error) {
        console.error(error);
        setError(error);
        setLoading(false);
        // You can handle error scenarios here, such as showing an error message to the user
      }
    };

    fetchData();
  }, []);

  return {
    realtedTracks,
    loading,
    error,
  };
}

export function useGetSongByCountry(props) {
  const [chartsCountry, setChartsCountry] = useState([]);
  const [isLoadingTracksByCon, setIsLoadingTracksByCon] = useState(true);
  const [errorGetSongByCon, setErrorGetSongByCon] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setChartsCountry(await getTracksByCountry(props.countryCode));
        setIsLoadingTracksByCon(false);
      } catch (err) {
        setErrorGetSongByCon(err);
        setIsLoadingTracksByCon(false);
      }
    })();
  }, [props.countryCode]);

  return {
    chartsCountry,
    isLoadingTracksByCon,
    errorGetSongByCon,
  };
}

async function getTracksByCountry(countryCode = "US") {
  const url = `https://shazam-core.p.rapidapi.com/v1/charts/country?country_code=${countryCode}`;
  const options = {
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": HOST,
    },
  };
  const response = await fetch(url, options);
  let data = await response.json();
  return data;
}

export function useGetArtistDetail(artistId) {
  const [loading, setLoading] = useState(true);
  const [artistData, setArtistData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://shazam-core.p.rapidapi.com/v2/artists/details?artist_id=${artistId}`;
      const headers = {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": HOST,
      };
      //console.log(url);

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: headers,
        });
        setLoading(false);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        let data = await response.json();
        //console.log(data);
        //let trackDetail = data;
        //console.log(trackDetail);
        // trackDetail.map((data) => {
        //     lyrics: data.resources.lyrics;
        //     // images: track.images;
        //     // singer: track.subtitle;
        //     // url: track.url;

        // })
        setArtistData(data);
      } catch (error) {
        console.error(error);
        setError(error);
        setLoading(false);
        // You can handle error scenarios here, such as showing an error message to the user
      }
    };

    fetchData();
  }, []);

  return {
    artistData,
    loading,
    error,
  };
}

// export function useGetSongByCountry(props) {
//   const [loading, setLoading] = useState(true);
//   const [chartsCountry, setChartsCountry] = useState([]);
//   const [errorGetSongByCon, setErrorGetSongByCon] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const url = `https://shazam-core.p.rapidapi.com/v1/charts/country?country_code=${props.countryCode}`;
//       const headers = {
//         'X-RapidAPI-Key': API_KEY,
//         'X-RapidAPI-Host': HOST,
//       };
//       console.log(url);

//       try {
//         const response = await fetch(url, {
//           method: "GET",
//           headers: headers,
//         });
//         setLoading(false);

//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }

//         let data = await response.json();
//         //console.log(data);
//         //let trackDetail = data;
//         //console.log(trackDetail);
//         // trackDetail.map((data) => {
//         //     lyrics: data.resources.lyrics;
//         //     // images: track.images;
//         //     // singer: track.subtitle;
//         //     // url: track.url;

//         // })
//         setChartsCountry(data);
//       } catch (errorGetSongByCon) {
//         console.error(errorGetSongByCon);
//         setErrorGetSongByCon(errorGetSongByCon);
//         setLoading(false);
//         // You can handle error scenarios here, such as showing an error message to the user
//       }
//     };

//     fetchData();

//   }, [props.countryCode]);

//   return {
//     chartsCountry,
//     loading,
//     errorGetSongByCon,
//   };
// }

// export function useGetSongsBySearch(searching) {
//   const [loadingSearching, setLoadingSearching] = useState(true);
//   const [searchResult, setSearchResult] = useState([]);
//   const [errorSearching, setErrorSearching] = useState(null);
//   let isError = false;

//   useEffect(() => {
//     const fetchData = async () => {
//       const url = `https://shazam-core.p.rapidapi.com/v1/search/multi?search_type=SONGS_ARTISTS&query=${searching.searching}`;
//       const headers = {
//         "X-RapidAPI-Key": API_KEY,
//         "X-RapidAPI-Host": HOST,
//       };

//       try {
//         const response = await fetch(url, {
//           method: "GET",
//           headers: headers,
//         });
//         setLoadingSearching(false);

//         if (!response.ok) {
//           isError = true;
//           setErrorSearching("Can't find searching data");
//           throw new Error("Failed to fetch data");
//         }

//         const data = await response.json();
//         setSearchResult(data);
//         setErrorSearching(null);
//         isError = false;
//       } catch (err) {
//         console.error(err);
//         setErrorSearching(err);
//         setLoadingSearching(false);
//       }
//     };

//     if (isError == false) {
//       fetchData();
//     }
//   }, [searching, isError]);

//   return {
//     searchResult,
//     loadingSearching,
//     errorSearching,
//   };
// }

export function useGetSongsBySearch(searching) {
  const [loading, setLoading] = useState(true);
  const [searchResult, setSearchResult] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setSearchResult(await getSongs(searching));
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [searching]);

  return {
    loading,
    searchResult,
    error,
  };
}

async function getSongs(searching) {
  const url = `https://shazam-core.p.rapidapi.com/v1/search/multi?search_type=SONGS_ARTISTS&query=${searching.searching}`;
  const options = {
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": HOST,
    },
  };
  let res = await fetch(url, options);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }else{
    let data = await res.json();
    return data;
  }
}

// export function useGetSongsBySearch(searching) {
//   const [loadingSearching, setLoadingSearching] = useState(true);
//   const [searchResult, setSearchResult] = useState([]);
//   const [errorSearching, setErrorSearching] = useState(null);
//   (async () => {
//     try {
//       setSearchResult(await getMusicBySearching(searching));
//       setLoadingSearching(false);
//     } catch (err) {
//       setErrorSearching(err);
//       setLoadingCharts(false);
//     }
//   })();

//   return {
//     searchResult,
//     loadingSearching,
//     errorSearching
//   };
// }

// export async function getMusicBySearching(searching) {
//   const url = `https://shazam-core.p.rapidapi.com/v1/search/multi?search_type=SONGS_ARTISTS&query=${searching.searching}`;
//   const options = {
//     headers: {
//       "X-RapidAPI-Key": API_KEY,
//       "X-RapidAPI-Host": HOST,
//     },
//   };
//   const response = [];
//   response = await fetch(url, options);
//   if (response != null && response != undefined){
//     return await response.json();
//   }else{
//     return;
//   }
// }
