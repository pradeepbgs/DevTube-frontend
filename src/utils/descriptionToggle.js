import { createSlice } from "@reduxjs/toolkit";

const descriptionSlice = createSlice({
    name: "description",
    initialState: {
        description: false,
    },
    reducers: {
        showDescription: (state, action) => {
            state.description = !state.description;
        }
    }
})



export const { showDescription } = descriptionSlice.actions;

export default descriptionSlice.reducer;