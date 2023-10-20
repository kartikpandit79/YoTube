import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true
    },
    reducers: {
        toggleMenuOpen: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeSidebar: (state) => {
            state.isMenuOpen= false;
        },
        openSidebar: (state) => {
            state.isMenuOpen= true;
        }
    }
});

export const { toggleMenuOpen, closeSidebar, openSidebar } = appSlice.actions;

export default appSlice.reducer;