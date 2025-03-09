import { useState, useEffect } from "react";

// export function useFetchUser() {
//   const url = `https://reqres.in/api/users/3`;
//   return fetch(url)
//     .then((res) => res.json())
//     .then((res) => res.data);
// }

export function useFetchUser(userId) {
  const [profile, setProfile] = useState([]);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);
  const [errorGetProfile, setErrorGetProfile] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setProfile(await getUserProfile(userId));
        setIsLoadingProfile(false);
      } catch (err) {
        setErrorGetProfile(err);
        setIsLoadingProfile(false);
      }
    })();
  }, [userId]);

  return {
    profile,
    isLoadingProfile,
    errorGetProfile,
  };
}

async function getUserProfile(userId) {
  const url = `https://reqres.in/api/users/${userId.userId}`;
  // console.log(url);
  const response = await fetch(url);
  let data = await response.json();
  let userInfo = data.data;
  // console.log(userInfo);
  return userInfo;
}
