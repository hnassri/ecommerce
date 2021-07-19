import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Product from "./pages/Product";


const AuthenticatedApp = () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Shop} />
                <Route  path='/article/:id' component={Product} />
            </Switch>
        </Router>
    );
}

export default AuthenticatedApp;