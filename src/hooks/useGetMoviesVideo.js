import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

// *Fetch movies Trailer

const useGetMoviesVideo = (movieId) => {

    const dispatch = useDispatch();

    const trailerVideo = useSelector((store) => store.trailerVideo)

    const getMovievideo = async () => {
        const url = "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US&api_key=00bfff38e3de2c230d04083147e9339c";
        const proxyUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent(url);
        const response = await fetch(proxyUrl);
        const data = await response.json();
        const json = JSON.parse(data.contents);
        const filterMovieData = json.results.filter(movie => movie.type === "Trailer");
        const trailer = filterMovieData[0];
        // console.log(trailer.key);
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        !trailerVideo && getMovievideo();
    }, []);

}


export default useGetMoviesVideo;

