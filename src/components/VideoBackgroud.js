import useGetMoviesVideo from "../hooks/useGetMoviesVideo";
import { useSelector } from "react-redux";

const VideoBackgroud = ({ movieId }) => {

  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  // Fetch movies Trailer
  useGetMoviesVideo(movieId);

  

  return (
    <div className="w-screen">
      <iframe
        className="w-full aspect-video object-cover"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player" frameBorder="0" allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
        
        ></iframe>
    </div>
  )
}
export default VideoBackgroud;
