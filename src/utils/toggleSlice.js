import { createSlice } from "@reduxjs/toolkit";


const toggleSlice = createSlice({
    name: "toggle",
    initialState: {
        isMenuOpen: true,
        description: false,
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
        }
    }

})

export const { toggleMenu, showDescription, toggleMenuFalse, toggleMenuTrue } = toggleSlice.actions;
export default toggleSlice.reducer;