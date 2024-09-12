import { SxProps, Theme } from '@mui/material/styles';

export const playerBarStyle = (theme: Theme): SxProps<Theme> => ({
    width: '100%',
    height: 100,
    position: 'fixed',
    bottom: 0,
    backgroundColor: theme.palette.mode === 'dark' ? '#212121' : '#f9f9f9',
    justifyContent: "space-around",
    alignItems: "flex-start",
});