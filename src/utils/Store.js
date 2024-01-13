import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import descriptionSlice from "./descriptionToggle";

const store = configureStore({
    reducer: {
        toggle: toggleSlice,
        description: descriptionSlice
    }
})

export default store;