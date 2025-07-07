import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    <div className="bg-black -mt-5 relative z-20">
      <div className="-mt-[300px]  relative z-20 -pt-[-10%]">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.nowPlayingPopular} />
        <MovieList title={"Top Rated"} movies={movies.getTopRated} />
        <MovieList title={"Upcoming"} movies={movies.getUpcomingMovies} />
      </div>

    </div>
  )
}

export default SecondaryContainer;
