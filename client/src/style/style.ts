import { SxProps, Theme } from '@mui/material/styles';
import {PaletteMode} from "@mui/material";
import ModeConstants from "../constant/ModeConstants";

export const playerBarStyle = (mode: PaletteMode): SxProps<Theme> => ({
    width: '100%',
    height: 72,
    position: 'fixed',
    bottom: 0,
    left: 0,
    backgroundColor: mode === ModeConstants.DARK ? '#212121' : '#f9f9f9',
});