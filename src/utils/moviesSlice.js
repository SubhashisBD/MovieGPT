import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        nowPlayingPopular: null,
        getTopRated: null,
        getUpcomingMovies:null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addNowPlayingPopular: (state, action) => {
            state.nowPlayingPopular = action.payload;
        },
        addGetTopRated: (state, action) => {
            state.getTopRated = action.payload;
        },
        addGetUpcomingMovies: (state, action) => {
            state.getUpcomingMovies = action.payload;
        }
    },
});

export const { addNowPlayingMovies, addTrailerVideo, addNowPlayingPopular, addGetTopRated ,addGetUpcomingMovies} = movieSlice.actions;

export default movieSlice.reducer;