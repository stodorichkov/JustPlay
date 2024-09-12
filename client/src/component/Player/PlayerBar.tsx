import {FC} from "react";
import {Grid2, Theme, Typography, useTheme} from "@mui/material";
import {playerBarStyle} from "../../style/style";
import TimeSlider from "./TimeSlider";
import * as colors from '@mui/material/colors';

const PlayerBar: FC = () => {
    const theme: Theme = useTheme()

    console.log(colors.red[500])
    console.log(colors)

    return (
        <Grid2 container sx={playerBarStyle(theme)}>
            <TimeSlider/>
            <Grid2 size={6}>
                <Typography>fjaf</Typography>
            </Grid2>

        </Grid2>
    );
}

export default PlayerBar;