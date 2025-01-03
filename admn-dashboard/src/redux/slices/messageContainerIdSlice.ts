import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ActiveMessageIdState {
    activeMessageId: string;
}

const initialState: ActiveMessageIdState = {
    activeMessageId: "1",
}

const activeMessageIdSlice = createSlice({
    name: 'activeMessageId',
    initialState,
    reducers: {
        setActiveMessageId: (state, action:
            PayloadAction<string>) => {
                state.activeMessageId = action.payload;
                console.log("changed activeMessage id: ", state.activeMessageId);
            }
    }
});

export const { setActiveMessageId } = activeMessageIdSlice.actions;

export default activeMessageIdSlice.reducer;