import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import authSlice from "./authSlice";
import videoSlice from "./videoSlice";
import userSlice from "./userSlice";


const store = configureStore({
    reducer: {
        toggle: toggleSlice,
        auth: authSlice,
        video: videoSlice,
        user: userSlice
    }
})

export default store;