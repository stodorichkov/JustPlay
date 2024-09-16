import {FC} from "react";
import {Stack, Grid2} from "@mui/material";
import {playerBarStyle} from "../../style/style";
import TimeSlider from "./TimeSlider";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import LeftControls from "./LeftControls";
import SongTitle from "./SongTitle";
import RightControls from "./RightControls";

const PlayerBar: FC = () => {
    const mode = useSelector((state: RootState) => state.mode)

    return (
        <Stack direction="column" sx={playerBarStyle(mode)}>
            <TimeSlider/>
            <Grid2 container sx={{justifyContent: "center", alignItems: "center", height: 1}}>
                <LeftControls/>
                <SongTitle/>
                <RightControls/>
            </Grid2>
        </Stack>
    );
}

export default PlayerBar;