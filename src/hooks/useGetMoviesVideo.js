import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

// *Fetch movies Trailer

const useGetMoviesVideo = (movieId) => {

    const dispatch = useDispatch();

    const getMovievideo = async () => {
        const url = "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US&api_key=00bfff38e3de2c230d04083147e9339c";
        const proxyUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent(url);
        const response = await fetch(proxyUrl);
        const data = await response.json();
        const json = JSON.parse(data.contents);
        // *console.log(json);
        const filterMovieData = json.results.filter(movie=>movie.type==="Trailer");
        const trailer = filterMovieData[1];
        console.log(trailer.key);
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getMovievideo();
    }, []);

}


export default useGetMoviesVideo;

