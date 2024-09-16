import {FC} from "react";
import {Checkbox, Grid2, Slider, Stack, Tooltip} from "@mui/material";
import {
    ArrowDropDown,
    ArrowDropUp,
    Repeat, RepeatOne,
    Shuffle,
    VolumeOff,
    VolumeUp
} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {updateShuffle} from "../../store/slice/ShuffleSlice";
import {updateRepeat} from "../../store/slice/RepeatSlice";
import {setVolume, updateMute} from "../../store/slice/VoumeSlice";

const RightControls: FC = () => {
    // variables for shuffle, repeat, volume and mute
    const shuffle: boolean = useSelector((state: RootState) => state.shuffle);
    const repeat: number = useSelector((state: RootState) => state.repeat);
    const mute: boolean = useSelector((state: RootState) => state.volume.mute);
    const volume: number = useSelector((state: RootState) => state.volume.volume);
    // actual volume witch depend on mute
    const actualVolume: number = mute ? 0 : volume;

    // dispatch
    const dispatch = useDispatch();

    const handleChangeVolume  = (event: Event, newValue: number| number[]) => {
        // console.log(newValue)

        if (typeof newValue === 'number') {
            console.log(newValue)
            dispatch(setVolume(newValue));
        } else if (Array.isArray(newValue)) {
            // Handle range (if needed, otherwise ignore)
            dispatch(setVolume(newValue[0])); // For single-slider scenarios, use the first value
        }
    }

    // Render repeat icon to be multiple times or once
    const renderRepeatCheckedIcon = () => repeat === 1 ? <Repeat/> : <RepeatOne/>

    return(
        <Grid2 size={{xl: 1.825, lg: 2.7375}}>
            <Stack spacing={1} direction="row" sx={{alignItems: 'center', justifyContent: 'space-around'}}>
                <Slider
                    value={actualVolume}
                    onChange={handleChangeVolume}
                    valueLabelDisplay="auto"
                    size="small"
                />
                <Tooltip title="Mute">
                    <Checkbox
                        checked={mute}
                        onChange={() => dispatch(updateMute())}
                        icon={<VolumeUp />}
                        checkedIcon={<VolumeOff />}
                    />
                </Tooltip>
                <Tooltip title="Repeate">
                    <Checkbox
                        checked={repeat > 0}
                        onChange={() => dispatch(updateRepeat())}
                        icon={<Repeat />}
                        checkedIcon={renderRepeatCheckedIcon()}
                    />
                </Tooltip>
                <Tooltip title="Shuffle">
                    <Checkbox
                        checked={shuffle}
                        onChange={() => dispatch(updateShuffle())}
                        icon={<Shuffle />}
                        checkedIcon={<Shuffle />}
                    />
                </Tooltip>
                <Tooltip title="Extend">
                    <Checkbox icon={<ArrowDropUp />} checkedIcon={<ArrowDropDown />}/>
                </Tooltip>
            </Stack>
        </Grid2>
    );
}

export default RightControls;