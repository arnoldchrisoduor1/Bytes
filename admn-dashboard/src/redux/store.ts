import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/menuSlice";
import sidebarOpenReducer from './slices/sidebarOpenSlice';
import selectedMessageReducer from './slices/selectedMessageSlice';
import setActiveMessageIdReducer  from "./slices/messageContainerIdSlice";


const store = configureStore({
    reducer: {
        menu: menuReducer,
        sidebar: sidebarOpenReducer,
        conversation: selectedMessageReducer,
        activeMessage: setActiveMessageIdReducer
        
    },
    // to help with debugging
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;