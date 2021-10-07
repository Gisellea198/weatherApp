import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { FiMenu } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { principalMenu } from "../helpers/menu";
import { NavMenu } from "../assets/styles/style";


const Header = (props) => {
    return (
        <Box
            sx={{ mb: 3 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <FiMenu />
                    </IconButton>
                    <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                        Weather App
                    </Typography>
                    <NavMenu>
                        {principalMenu.map((item, index) => (
                            <Link key={index} to={item.path}>
                                {item.label}
                            </Link>
                        ))}
                    </NavMenu>
                    {props.children}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
