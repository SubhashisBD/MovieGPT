import { useDispatch, useSelector } from "react-redux";
import { GEMINI_KEY } from "../utils/constant";
import lang from "./languageConstant";
import { useRef, useState } from "react";
import { addGptMoviesResult } from "../utils/gptSlice";


const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const searchMovieTMDB = async (movies) => {
        try {
            // CHECKPOINT 1: Validate movie name
            if (!movies || movies.trim() === '') {
                console.warn('Empty movie name provided');
                return [];
            }

            const url = "https://api.themoviedb.org/3/search/movie?query=" + movies.trim() + "&include_adult=false&language=en-US&page=1&api_key=00bfff38e3de2c230d04083147e9339c";
            const proxyUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent(url);
            
            const response = await fetch(proxyUrl);
            
            // CHECKPOINT 2: Check if fetch was successful
            if (!response.ok) {
                throw new Error(`TMDB API failed: ${response.status}`);
            }

            const json = await response.json();
            
            // CHECKPOINT 3: Validate proxy response
            if (!json.contents) {
                throw new Error('Invalid proxy response format');
            }

            const data = JSON.parse(json.contents);
            
            // CHECKPOINT 4: Validate TMDB response structure
            if (!data.results) {
                console.warn('No results found for movie:', movies);
                return [];
            }

            return data.results;
            
        } catch (error) {
            console.error('Error searching movie in TMDB:', movies, error);
            return []; // Return empty array instead of failing
        }
    }

    const handleGptSearch = async () => {
        
        try {

            setLoading(true);
            setError(null);

            // CHECKPOINT 5: Validate search input
            if (!searchText.current.value || searchText.current.value.trim() === '') {
                setError('Please enter a search query');
                setLoading(false);
                return;
            }

            // CHECKPOINT 6: Validate GEMINI_KEY
            if (!GEMINI_KEY) {
                setError('Gemini API key is missing');
                setLoading(false);
                return;
            }

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
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            // CHECKPOINT 7: Check Gemini API response
            if (!response.ok) {
                throw new Error(`Gemini API failed: ${response.status} ${response.statusText}`);
            }

            const moviesList = await response.json();

            // CHECKPOINT 8: Validate Gemini response structure
            if (!moviesList?.candidates?.[0]?.content?.parts?.[0]?.text) {
                throw new Error('Invalid response format from Gemini API');
            }

            const gptMovies = moviesList.candidates[0].content.parts[0].text.split(",");

            // CHECKPOINT 9: Validate movies list
            if (!gptMovies || gptMovies.length === 0) {
                throw new Error('No movies found in Gemini response');
            }

            // Clean up movie names (remove extra spaces)
            const cleanedMovies = gptMovies.map(movie => movie.trim()).filter(movie => movie);

            // CHECKPOINT 10: Ensure we have valid movies
            if (cleanedMovies.length === 0) {
                throw new Error('No valid movie names found');
            }

            const promiseArray = cleanedMovies.map((movies) => searchMovieTMDB(movies));
            const tmdbresults = await Promise.all(promiseArray);

            // CHECKPOINT 11: Filter out empty results
            const validResults = tmdbresults.filter(result => result && result.length > 0);
            
            if (validResults.length === 0) {
                setError('No movies found for your search query');
                setLoading(false);
                return;
            }

          dispatch(addGptMoviesResult({ 
                moviesNames: cleanedMovies, 
                moviesResults: tmdbresults 
            }))

            setLoading(false);

        } catch (error) {
            console.error('Error in GPT search:', error);
            setError(error.message || 'Something went wrong. Please try again.');
            setLoading(false);
        }
    }

    return (
        <div>
            <div className="flex justify-center items-center w-full md:w-1/2 pt-[50%] md:pt-[10%] mx-auto">
                <form className="grid grid-cols-12 w-full md:w-3/4 bg-black rounded-lg" onSubmit={(e) => e.preventDefault()}>
                    <input
                        ref={searchText}
                        type="text"
                        placeholder={lang[langKey].gptPlaceHolder}
                        className="p-4 m-2 h-14 rounded-lg col-span-9 border-none appearance-none"
                        disabled={loading}
                    />
                    <button
                        className="bg-red-500 text-white px-4 h-14 rounded-lg col-span-3 flex items-center justify-center m-2 disabled:opacity-50"
                        onClick={handleGptSearch}
                        disabled={loading}
                    >
                        {loading ? 'Searching...' : lang[langKey].search}
                    </button>
                </form>
                
                {/* Error Display */}
                {error && (
                    <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                        {error}
                    </div>
                )}
            </div>
        </div>
    )
}

export default GptSearchBar;