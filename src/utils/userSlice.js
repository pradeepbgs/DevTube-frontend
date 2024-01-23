import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        contnet: null,
        userVideo: null,
    },
    reducers: {
        addComment: (state, action) => {
            state.userComment = action.payload;
        },
        addUser: (state, action) => {
            state.user = action.payload;
        },
        addVideo: (state, action) => {
            state.userVideo = action.payload;
        }
    }
})

export const { addComment , addUser, addVideo} = userSlice.actions;

export default userSlice.reducer;