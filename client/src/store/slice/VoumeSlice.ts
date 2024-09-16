import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import SliceConstants from "../../constant/SliceConstants";

// interface for volume and mute
export interface VolumeState {
    volume: number
    mute: boolean
}

// initial state volume = 100%, mute = false
const initialState: VolumeState = {
    volume: 100,
    mute: false
}

const VolumeSlice = createSlice({
    name: SliceConstants.VOLUME,
    initialState,
    reducers: {
        // update value of volume and if new value > 0 unmute else mute
        setVolume: (state, action: PayloadAction<number>) => {
            console.log(action.payload)
            state.volume = action.payload
            state.mute = action.payload === 0
        },
        // update mute
        updateMute: (state) => {
            state.mute = !state.mute
        }
    }
});

// export reducer and actions
export const {setVolume, updateMute} = VolumeSlice.actions;
export const volumeReducer = VolumeSlice.reducer;