import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackgroud from "./VideoBackgroud";

const MainContainer = () =>{

const movies = useSelector((store)=>store.movies?.nowPlayingMovies);

if(!movies) return;

const mainMovie = movies[0];
// console.log(mainMovie)
const {original_title,overview,id} = mainMovie;

    return(
        <div className="relative w-full aspect-video">
            <VideoTitle title = {original_title} overview = {overview}/>
            <VideoBackgroud movieId ={id}/>
        </div>
    )
}

export default MainContainer;
