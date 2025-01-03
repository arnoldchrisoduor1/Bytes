import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedMessageState {
    selectedMessage: string;
}

const initialState: SelectedMessageState = {
    selectedMessage: "1",
}

const selectedMessageSlice = createSlice({
    name: 'selectedMessage',
    initialState,
    reducers: {
        setSelectedMessage: (state, action: PayloadAction<string>) => {
            state.selectedMessage = action.payload;
            console.log("selected conversation id: ",state.selectedMessage );
            
        }
    }
});

export const { setSelectedMessage } = selectedMessageSlice.actions;
export default selectedMessageSlice.reducer;
