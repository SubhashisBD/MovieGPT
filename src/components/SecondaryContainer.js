import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    <div className="bg-black">
      <div className="-mt-[400px] pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.nowPlayingPopular} />
        <MovieList title={"Top Rated"} movies={movies.getTopRated} />
        <MovieList title={"Upcoming"} movies={movies.getUpcomingMovies} />
      </div>

    </div>
  )
}

export default SecondaryContainer;
