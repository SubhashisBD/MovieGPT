import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackgroud from "./VideoBackgroud";

const MainContainer = () =>{

const movies = useSelector((store)=>store.movies?.nowPlayingMovies);

if(!movies) return;

const mainMovie = movies[0];
const {original_title,overview,id} = mainMovie;

    return(
        <div className=" pt-[35%] md:pt-0 bg-black w-screen aspect-video ">
            <VideoTitle title = {original_title} overview = {overview}/>
            <VideoBackgroud movieId ={id}/>
        </div>
   )
}

export default MainContainer;
