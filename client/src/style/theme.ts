import {createTheme, Theme} from "@mui/material";

export const theme = (darkMode: boolean): Theme => {
    return createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
            background: {
                default: darkMode ? "#101010" : "#f0f0f0"
            }
        }
    });
}