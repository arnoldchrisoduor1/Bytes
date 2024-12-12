import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SidebarOpenState {
    sidebarOpen: boolean;
}

const initialState: SidebarOpenState = {
    sidebarOpen: false,
}

const sidebarOpenSlice = createSlice({
    name: 'sidebarOpen',
    initialState,
    reducers: {
        setSidebarOpenState: (state, action: PayloadAction<boolean>) => {
            state.sidebarOpen = action.payload;
            console.log("Sidebar Open State", state.sidebarOpen);
        }
    }
});

export const { setSidebarOpenState } = sidebarOpenSlice.actions;
export default sidebarOpenSlice.reducer;