import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";

const appStore = configureStore(
    {
        // Different reducers from different slices
        reducer: {
            user: UserReducer,
        },
    }
);

export default appStore;