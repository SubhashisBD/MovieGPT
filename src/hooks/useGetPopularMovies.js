import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingPopular } from "../utils/moviesSlice";


const useGetPopularMovies = () => {

    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=00bfff38e3de2c230d04083147e9339c';
        const proxyUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent(url);
        const response = await fetch(proxyUrl);
        const data = await response.json();
        const json = JSON.parse(data.contents)
        // console.log(json);
        dispatch(addNowPlayingPopular(json.results));
    }
    useEffect(() => {
        getPopularMovies();
    }, [])
}

export default useGetPopularMovies;