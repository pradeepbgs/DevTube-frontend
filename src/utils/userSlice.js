import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        contnet: null,
    },
    reducers: {
        addComment: (state, action) => {
            state.userComment = action.payload;
        }
    }
})

export const { addComment } = userSlice.actions;

export default userSlice.reducer;