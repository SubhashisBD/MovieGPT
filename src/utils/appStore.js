import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
import moviesReducer from "./moviesSlice";

const appStore = configureStore(
    {
        // Different reducers from different slices
        reducer: {
            user: UserReducer,
            movies: moviesReducer,
            
        },
    }
);

export default appStore;