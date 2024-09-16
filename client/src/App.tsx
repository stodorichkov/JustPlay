import React, {FC} from 'react';
import PlayerBar from "./component/Player/PlayerBar";
import {Button, CssBaseline, ThemeProvider, Tooltip} from "@mui/material";
import {theme} from "./style/theme";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store/store";
import ModeConstants from "./constant/ModeConstants";
import {setMode} from "./store/slice/ModeSlice";

const App: FC = () => {
    const mode = useSelector((state: RootState) => state.mode)
    const dispatch = useDispatch()

    return (
        <ThemeProvider theme={theme(mode)}>
            <CssBaseline />
            <Tooltip title="Play" placement="bottom-end">
                <Button variant="contained" onClick={() => dispatch(setMode(ModeConstants.LIGHT))}>Light</Button>
            </Tooltip>
            <Button variant="contained" onClick={() => dispatch(setMode(ModeConstants.DARK))}>Dark</Button>
            <PlayerBar/>
        </ThemeProvider>
  );
}

export default App;