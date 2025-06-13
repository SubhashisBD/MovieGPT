import useGetMoviesVideo from "../hooks/useGetMoviesVideo";
import { useSelector } from "react-redux";

const VideoBackgroud = ({ movieId }) => {

  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  // Fetch movies Trailer
  useGetMoviesVideo(movieId);

  return (
    <div className="w-screen absolute top-0 left-0 -z-20">
      <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"   
        ></iframe>
    </div>
  )
}
export default VideoBackgroud;
