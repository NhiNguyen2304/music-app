import { HiOutlineChartBar, HiOutlineHashtag, HiOutlineHome, HiOutlineLogin, HiOutlineSearchCircle, HiOutlineUserCircle, HiOutlineUserGroup } from 'react-icons/hi';

export const genres = [
  { title: 'Pop', value: 'POP' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { title: 'Dance', value: 'DANCE' },
  { title: 'Rock', value: 'ROCK' },
  { title: 'Worldwide', value: 'WORLDWIDE' },
  { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
  { title: 'Latin', value: 'LATIN' },
  { title: 'Film', value: 'FILM_TV' },
  { title: 'Electronic', value: 'ELECTRONIC' },
  { title: 'Soul', value: 'SOUL_RNB' },
  { title: 'Alternative', value: 'ALTERNATIVE' },
  { title: 'Country', value: 'COUNTRY' },
  { title: 'House', value: 'HOUSE' },
  { title: 'K-Pop', value: 'K_POP' },
];

export const links = [
  { name: 'Discover', to: '/discover', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlineSearchCircle },
  { name: 'Trending Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Trending Charts', to: '/top-charts', icon: HiOutlineHashtag },
  { name: 'Profile', to: '/profile', icon: HiOutlineUserCircle },
  { name: 'Login', to: '/login', icon: HiOutlineLogin },
];
