import {createSlice} from "@reduxjs/toolkit";
import SliceConstants from "../../constant/SliceConstants";

// initial state 0
const initialState: number = 0

const RepeatSlice = createSlice({
    name: SliceConstants.REPEAT,
    initialState,
    reducers: {
        // update repeat between 0 and 2
        updateRepeat: (state) => state === 2 ? 0 : state + 1
    }
});

// export reducer and actions
export const {updateRepeat} = RepeatSlice.actions;
export const repeatReducer = RepeatSlice.reducer;