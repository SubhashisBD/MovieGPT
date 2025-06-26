import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gptSearch',
    initialState: {
        gptSearch: false,
        moviesResults:null,
        moviesNames:null
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.gptSearch = !state.gptSearch;
        },
        addGptMoviesResult:(state,action) =>{
            const {moviesNames,moviesResults} = action.payload;
            state.moviesResults = moviesResults;
            state.moviesNames = moviesNames;
        }
    }
})

export const { toggleGptSearch, addGptMoviesResult} = gptSlice.actions;
export default gptSlice.reducer;