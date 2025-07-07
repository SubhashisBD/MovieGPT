import React from 'react'
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { moviesResults, moviesNames } = gpt;
  if (!moviesNames) return null;

  return (
    <div className="text-white p-4 m-4 ">
      <div>
        {moviesNames.map((movieName,index)=><MovieList key={index} title={movieName} movies = {moviesResults[index]} />)}
      </div>
    </div>
  ) 
}

export default GptMovieSuggestion;
