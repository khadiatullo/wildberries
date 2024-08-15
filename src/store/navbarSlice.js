import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
    name: 'navBar',
    initialState: {
        active: false
    },

    reducers: {
        changeStateMenu: (state) => {
            state.active = !state.active
        }
    }
})

export const {changeStateMenu } = navbarSlice.actions

export default navbarSlice.reducer