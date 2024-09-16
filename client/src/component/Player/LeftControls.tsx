import {FC} from "react";
import {ButtonGroup, IconButton, Stack, Tooltip, Typography, Grid2} from "@mui/material";
import {PlayArrow, SkipNext, SkipPrevious} from "@mui/icons-material";

const LeftControls: FC = () => {
    return(
        <Grid2 size={{xl: 1.825, lg: 2.7375}}>
            <Stack spacing={2} direction="row" sx={{alignItems: "center",}}>
                <ButtonGroup>
                    <Tooltip title="Previous" placement="bottom">
                        <IconButton>
                            <SkipPrevious/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Play" placement="bottom">
                        <IconButton size="large">
                            <PlayArrow fontSize="inherit"/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Next" placement="bottom">
                        <IconButton>
                            <SkipNext/>
                        </IconButton>
                    </Tooltip>
                </ButtonGroup>
                <Typography variant="subtitle2" align="center">2:33 / 3:22</Typography>
            </Stack>
        </Grid2>
    )
}

export default LeftControls;