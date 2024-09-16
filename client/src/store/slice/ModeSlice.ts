import ModeConstants from "../../constant/ModeConstants";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import SliceConstants from "../../constant/SliceConstants";
import {PaletteMode} from "@mui/material";

// initial state light
const initialState: PaletteMode = ModeConstants.LIGHT;

const ModeSlice = createSlice({
    name: SliceConstants.MODE,
    initialState,
    reducers: {
        // set mode to light or dark
        setMode: (_state, action: PayloadAction<PaletteMode>) => action.payload
    }
});

// export reducer and actions
export const {setMode} = ModeSlice.actions;
export const modeReducer = ModeSlice.reducer;