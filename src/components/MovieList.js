import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
  if (!movies) return null;
  return (
    <div className="px-4 bg-black">
      <h1 className="text-white py-4 text-3xl">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-none">
        <div className="flex">
          {movies.map(movies => <MovieCard key={movies.id} posterPath={movies.poster_path} />)}
        </div>
      </div>
    </div>
  )
}

export default MovieList;
