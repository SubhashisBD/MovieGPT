import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore(
    {
        // Different reducers from different slices
        reducer: {
            user: UserReducer,
            movies: moviesReducer,
            gpt:gptReducer,
        },
    }
);

export default appStore;