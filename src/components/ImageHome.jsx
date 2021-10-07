import React from 'react';
import Grid from '@mui/material/Grid';
import Clima from '../assets/img/clima.jpg';
import { Img } from '../assets/styles/style';

const ImageHome = () => {
    return (
        <Grid container justifyContent="center">
            <Img src={Clima} style={{ border: "solid", borderColor: "transparent", borderRadius: "20px" }} />
        </Grid>

    );
}

export default ImageHome;