import React, {FC, useState} from 'react';
import PlayerBar from "./component/Player/PlayerBar";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./style/theme";

const App: FC = () => {
    const [darkMode, setDarkMode] = useState<boolean>(true);
    console.log(theme(darkMode))
    return (
        <ThemeProvider theme={theme(darkMode)}>
            <CssBaseline />
            <h1>Hi idiot</h1>
            <PlayerBar/>
        </ThemeProvider>
  );
}

export default App;