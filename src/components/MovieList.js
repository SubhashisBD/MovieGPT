import MovieCard from "./MovieCard"
import "../index.css";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;
  return (
    <div className="px-4 bg-black/70">
      <h1 className="text-white py-4 text-3xl font-semibold">{title}</h1>
      <div className="w-full">
        <div className="movieList flex overflow-x-scroll  gap-4 ">
          {movies?.map(movies => <MovieCard key={movies.id} posterPath={movies.poster_path} />)}
        </div>
      </div>
    </div>
  )
}

export default MovieList;
