import { API_KEY } from "../constants/constants";

const action = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`;
const originals =
  `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`;
const comedy =
  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`;
const Horror =
  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`;
const romance =
  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`;
const documentaries =
  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`;

  export {comedy,romance,Horror,documentaries,action,originals}