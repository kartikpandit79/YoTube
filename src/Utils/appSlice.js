import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true
    },
    reducers: {
        toggleMenuOpen: (state, action) => {
            state.isMenuOpen = !state.isMenuOpen;
        }
    }
});

export const { toggleMenuOpen } = appSlice.actions;

export default appSlice.reducer;