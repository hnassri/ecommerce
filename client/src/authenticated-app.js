import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home';
import Page404 from './pages/404';

const AuthenticatedApp = () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/404' component={Page404} />
                <Redirect to="/404"/>
            </Switch>
        </Router>
    );
}

export default AuthenticatedApp;