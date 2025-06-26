import React from 'react'
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACK_IMG } from "../utils/constant";

const GptSearch = () => {
    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <img
                    src={BACK_IMG}
                    alt="bg-image"
                    className="w-full h-full object-cover"
                />
            </div>
            <GptSearchBar />
            <GptMovieSuggestion />
        </div>
    )
}

export default GptSearch;