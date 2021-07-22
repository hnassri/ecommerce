import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Product from "./pages/Product";
import Page404 from './pages/404';
import Test from "./pages/test/Test";
import Admin from "./pages/Admin/Admin"
const AuthenticatedApp = () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Shop} />
                <Route  path='/article/:id' component={Product} />
                <Route exact path='/test' component={Test} />
                <Route exact path='/admin' component={Admin} />
                <Route exact path='/404' component={Page404} />
                <Redirect to="/404"/>
            </Switch>
        </Router>
    );
}

export default AuthenticatedApp;