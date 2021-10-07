import React from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { PublicRouter } from "./PublicRouter";
import Login from "../views/Login";
import Register from "../views/Register";
import Profile from "../components/User";
import Header from "../components/Header";
import User from "../components/User";
import Home from "../views/Home";


const Routers = () => {
    return (
        <Router>
            <CssBaseline />
            <div id="main">
                <Header>
                    <User />
                </Header>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <PublicRouter exact path="/login" component={Login} />
                    <PublicRouter exact path="/signup" component={Register} />
                    <Route exact path="/profile/:id" component={Profile} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    );
};

export default Routers;
