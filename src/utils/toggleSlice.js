import { createSlice } from "@reduxjs/toolkit";


const toggleSlice = createSlice({
    name: "toggle",
    initialState: {
        isMenuOpen: true,
        description: false,
        userIcon: false,
    },
    reducers: {
        toggleMenu: (state) => {   
            state.isMenuOpen = !state.isMenuOpen;
        },
        toggleMenuFalse: (state) => {
            state.isMenuOpen = false;
        },
        toggleMenuTrue: (state) => {
            state.isMenuOpen = true
        },
        showDescription: (state, action) => {
            state.description = !state.description;
        },
        showUserIcon: (state) => {
            state.userIcon = !state.userIcon
        }
    }

})

export const { 
    toggleMenu, 
    showDescription, 
    toggleMenuFalse, 
    toggleMenuTrue ,
    showUserIcon
} = toggleSlice.actions;
export default toggleSlice.reducer;