import { IMG_CDN_URL } from "../utils/constant"

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
return (
    <div className="">
      <img className=" min-w-48 max-w-48 rounded-lg cursor-pointer hover:scale-95 transition-all "alt="Movie card"
      src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard;
