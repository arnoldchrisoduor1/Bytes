import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/menuSlice";

const store = configureStore({
    reducer: {
        menu: menuReducer,
    },
    // Add this to help with debugging
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;