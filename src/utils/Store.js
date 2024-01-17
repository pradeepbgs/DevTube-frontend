import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import authSlice from "./authSlice";
import videoSlice from "./videoSlice";


const store = configureStore({
    reducer: {
        toggle: toggleSlice,
        auth: authSlice,
        video: videoSlice
    }
})

export default store;