import {createTheme, PaletteMode, Theme} from "@mui/material";
import ModeConstants from "../constant/ModeConstants";

export const theme = (mode: PaletteMode): Theme => {
    return createTheme({
        palette: {
            mode,
            background: {
                default: mode === ModeConstants.DARK ? "#101010" : "#f0f0f0"
            }
        }
    });
}