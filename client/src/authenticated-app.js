import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';

const AuthenticatedApp = () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/shop' component={Shop} />
            </Switch>
        </Router>
    );
}

export default AuthenticatedApp;