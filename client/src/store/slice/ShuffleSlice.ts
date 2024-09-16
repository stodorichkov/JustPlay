import {createSlice} from "@reduxjs/toolkit";
import SliceConstants from "../../constant/SliceConstants";

const initialState: boolean = false

const ShuffleSlice = createSlice({
    name: SliceConstants.SHUFFLE,
    initialState,
    reducers: {
        updateShuffle: (state) => !state
    }
});

export const {updateShuffle} = ShuffleSlice.actions;
export const shuffleReducer = ShuffleSlice.reducer;