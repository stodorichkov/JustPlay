import {Slider} from "@mui/material";
import {useState} from "react";

const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};


const TimeSlider = () => {
    const [curTime, setCurTime] = useState<number>(0)

    const handleChangeCurTime = (event: Event, newValue: number | number[]) => {
        setCurTime(newValue as number);
    };

    return(
        <Slider
            sx={{padding: 0}}
            valueLabelDisplay="auto"
            min={0}
            valueLabelFormat={(val) => formatTime(val)}
            value={curTime}
            onChange={handleChangeCurTime}
        />
    );
}

export default TimeSlider;