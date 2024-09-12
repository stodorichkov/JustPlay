import ModeConstants from "../../constant/ModeConstants";
import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import SliceConstants from "../../constant/SliceConstants";

const initialState: string = ModeConstants.light;

const modeSlice: Slice = createSlice({
    name: SliceConstants.MODE,
    initialState,
    reducers: {
        setMode: (state, action: PayloadAction<string>) => {
            return action.payload;
        }
    }
})

export const {setMode} = modeSlice.actions
export default modeSlice