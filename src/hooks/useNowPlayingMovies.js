import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

// Fetch Data From TMDB API and Update the Store


const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    const getMovieApi = async () => {
        const url = 'https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=00bfff38e3de2c230d04083147e9339c';
        const proxyUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent(url);
        const response = await fetch(proxyUrl);
        const data = await response.json();
        const json = JSON.parse(data.contents)

        //* AllOrigins proxy wraps the API result in a `contents` field
        // *console.log(json.results);
        
        dispatch(addNowPlayingMovies(json.results));

    }
    useEffect(() => {
        getMovieApi();
    }, []);
}

export default useNowPlayingMovies;