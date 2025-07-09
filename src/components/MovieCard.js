import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath, overview, adult, release, lang, title }) => {
  if (!posterPath) return null;

  const ageRating = adult ? "18+" : "13+";
  const releaseYear = release?.split("-")[0] || "N/A";

  return (
    <div className="relative group w-48 hover:z-50">
      <img
        className="min-w-48 max-w-48 rounded-lg cursor-pointer transition-all duration-300 group-hover:scale-110 "
        alt="Movie card"
        src={IMG_CDN_URL + posterPath}
      />

      <div className="absolute hidden group-hover:flex flex-col gap-2 top-0 left-0 w-72 bg-[#181818] text-white rounded-lg shadow-xl p-3 z-10 group-hover:scale-105 transform transition-all duration-300">
        <img
          className="w-full h-40 object-cover rounded-md"
          src={IMG_CDN_URL + posterPath}
          alt="poster"
        />

        <div className="flex gap-2 justify-between max-w-60">
          <button className="bg-white text-black text-sm px-4 py-1 rounded hover:bg-gray-300 transition">
            ▶ Watch Now
          </button>
          <button className="bg-neutral-700 text-white px-3 py-1 rounded hover:bg-neutral-600">+</button>
        </div>

        <div className="text-xs text-gray-300 flex gap-2 items-center">
          <span>{releaseYear}</span> • 
          <span>U/A {ageRating}</span> • 
          <span>1h 58m</span> • 
          <span>{lang?.toUpperCase()}</span>
        </div>

        <p className="text-sm text-gray-400 line-clamp-3">
          {overview}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
