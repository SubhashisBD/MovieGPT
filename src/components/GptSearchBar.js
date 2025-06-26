import { useDispatch, useSelector } from "react-redux";
import { BACK_IMG, GEMINI_KEY } from "../utils/constant";
import lang from "./languageConstant";
import { useRef } from "react";
import { addGptMoviesResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector(store => store.config.lang)
    const searchText = useRef(null);

    const searchMovieTMDB = async (movies) => {

        const url = "https://api.themoviedb.org/3/search/movie?query=" + movies + "&include_adult=false&language=en-US&page=1&api_key=00bfff38e3de2c230d04083147e9339c";
        const proxyUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent(url);
        const response = await fetch(proxyUrl);
        const json = await response.json();
        // console.log(json);
        const data = JSON.parse(json.contents);
        // console.log(data);
        return data.results;
    }

    const handleGptSearch = async () => {

        const gptQuery = "Act as a movie Recommendation system and suggest some movies for the query :" + searchText.current.value + ". Only give me name of 5 movies, comma separated like the example result given as. Example-Dhol, Dhammal, Koi mil gya, Dhoom,RRR";

        const payload = {
            "contents": [
                {
                    "parts": [
                        {
                            "text": gptQuery
                        }
                    ]
                }
            ]
        }
        const response = await fetch(GEMINI_KEY, {
            method: "POST",
            body: JSON.stringify(payload)
        })
        const moviesList = await response.json();
        const gptMovies = moviesList?.candidates[0]?.content?.parts[0].text.split(",");
        // console.log(gptMovies);

        const promiseArray = gptMovies.map((movies) => searchMovieTMDB(movies));
        const tmdbresults = await Promise.all(promiseArray);
        console.log(tmdbresults);

        dispatch(addGptMoviesResult({ moviesNames: gptMovies, moviesResults: tmdbresults }));

    }
    return (

        <div>
            <div className=" flex justify-center items-center w-1/2  pt-[10%] mx-auto ">
                <form className="grid grid-cols-12 w-3/4 bg-black rounded-lg " onSubmit={(e) => e.preventDefault()}>
                    <input
                        ref={searchText}
                        type="text"
                        placeholder={lang[langKey].gptPlaceHolder}
                        className="p-4 m-2 h-14 rounded-lg col-span-9 border-none appearance-none"
                    />
                    <button
                        className=" bg-red-500 text-white px-4 h-14 rounded-lg col-span-3 flex items-center justify-center m-2"
                        onClick={handleGptSearch}>{lang[langKey].search}
                    </button>
                </form>
            </div>
        </div>



    )
}

export default GptSearchBar;