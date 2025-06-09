import { useEffect } from 'react'
import Header from "./Header";
import { API_OPTION } from "../utils/constant";

const Browse = () => {

  const getMovieApi = async () => {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=00bfff38e3de2c230d04083147e9339c';
    const proxyUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent(url);
    const response = await fetch(proxyUrl);
    const data = await response.json();
    const json = JSON.parse(data.contents)
    console.log(json); // allorigins wraps the response in a 'contents' field
  }
  useEffect(() => {
    getMovieApi();
  }, []);

  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse;
