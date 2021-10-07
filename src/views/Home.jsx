import React from 'react';
import { Grid } from '@material-ui/core';
import ImageHome from '../components/ImageHome';
import Search from '../components/Search';

const Home = () => {
    return (
        <Grid>
            <ImageHome />
            <Search />
        </Grid>
    );
}

export default Home;