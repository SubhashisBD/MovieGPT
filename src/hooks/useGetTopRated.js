import { useDispatch, useSelector } from "react-redux";
import { addGetTopRated } from "../utils/moviesSlice";
import { useEffect } from "react";

// Fetch Data From TMDB API and Update the Store


const useGetTopRated = () => {

    const dispatch = useDispatch();

    const topRated = useSelector((store) => store.getTopRated)

    const getMovieApi = async () => {
        const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=00bfff38e3de2c230d04083147e9339c';
        const proxyUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent(url);
        const response = await fetch(proxyUrl);
        const data = await response.json();
        const json = JSON.parse(data.contents)

        dispatch(addGetTopRated(json.results));

    }
    useEffect(() => {
        !topRated && getMovieApi();
    }, []);
}

export default useGetTopRated;