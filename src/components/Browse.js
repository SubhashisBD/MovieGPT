import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./Maincontainer";
import SecondaryContainer from "./SecondaryContainer";
import useGetPopularMovies from "../hooks/useGetPopularMovies";
import useGetTopRated from "../hooks/useGetTopRated";
import useGetUpcomingMovies from "../hooks/useGetUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {

  const toggleGpt = useSelector(store => store.gpt.gptSearch);

  useNowPlayingMovies();
  useGetPopularMovies();
  useGetTopRated();
  useGetUpcomingMovies();

  return (
    <div className="movieList">
      <Header />
      {
        toggleGpt ? <GptSearch /> :
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
      }
    </div>
  )
}

export default Browse;
