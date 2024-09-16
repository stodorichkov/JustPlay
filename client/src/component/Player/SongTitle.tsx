import {FC} from "react";
import {Grid2, Typography} from "@mui/material";

const SongTitle: FC = () => {

    const sizeCalculate = (controlSize: number): number => {
        return 12 - 2 * controlSize;
    }

    return(
       <Grid2
           size={{xl: sizeCalculate(1.825), lg: sizeCalculate(2.7375)}}
       >
           <Typography align="center">
               gafhjuhgauhgahjga
           </Typography>
       </Grid2>
    );
}

export default SongTitle