import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'video',
    initialState: {
        video: null,
        comments:null,
        likes: null,
        owner: null,
        subscribers:null,
        areYouSubscribed: false,
    },
    reducers: {
        setVideo: (state, action) => {
            state.video = action.payload;
        },
        setComments: (state, action) => {
            state.comments = action.payload;
        },
        setLikes: (state, action) => {
            state.likes = action.payload
        },
        setOwner: (state, action) => {
            state.owner = action.payload;
        },
        setSubscribers: (state, action) => {
            state.subscribers = action.payload;
        },
        isSubscribed: (state, action) => {
            state.areYouSubscribed = action.payload;
        }
    }
})

export const { setVideo, setOwner, setSubscribers, isSubscribed , setComments, setLikes} = movieSlice.actions;

export default movieSlice.reducer;