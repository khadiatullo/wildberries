import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "./navbarSlice";
import productSlice from "./productSlice";

export const store = configureStore({
    reducer: {
        navBar: navbarSlice,
        products: productSlice
    },
})