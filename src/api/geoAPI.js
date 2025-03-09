import { useState, useEffect } from "react";

const API_KEY = "36416cfcf83958c8dc3dc93df1a91bfbf476b80c2f15e5e74c93441d";
export function useGetCountry() {
    const [loading, setLoading] = useState(true);
    const [countryCode, setCountryCode] = useState();
    const [countryName, setCountryName] = useState();
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        const url = `https://api.ipdata.co?api-key=${API_KEY}`;
  
        try {
          const response = await fetch(url, {
            method: "GET",
          });
          setLoading(false);
  
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
  
          let data = await response.json();
          setCountryCode(data.country_code);
          setCountryName(data.country_name);
        } catch (error) {
          console.error(error);
          setError(error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, [countryCode]);
  
    return {
      countryCode,
      countryName,
      loading,
      error,
    };
  }