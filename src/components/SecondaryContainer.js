import Footer from "./Footer";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black -mt-5 relative z-20">
        <div className=" mt-0 md:-mt-[300px]  relative z-20 md:pt-[-10%]">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.nowPlayingPopular} />
          <MovieList title={"Top Rated"} movies={movies.getTopRated} />
          <MovieList title={"Upcoming"} movies={movies.getUpcomingMovies} />
        </div>
        <Footer/>
      </div>
    )

  )
}

export default SecondaryContainer;
