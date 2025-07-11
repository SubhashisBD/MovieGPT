import MovieCard from "./MovieCard"
import "../index.css";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;
  return (
    <div className="px-4 bg-black/70">
      <h1 className="movieList text-white py-4 text-2xl md:text-3xl font-semibold">{title}</h1>
      <div className="w-full">
        <div className="movieList flex overflow-x-scroll  gap-4 ">
          {movies?.map(movies => <MovieCard key={movies.id} posterPath={movies.poster_path} overview={movies.overview
          } adult={movies.adult} release={movies.release_date
          } lang = {movies.original_language} />)}
        </div>
      </div>
    </div>
  )
}

export default MovieList;
