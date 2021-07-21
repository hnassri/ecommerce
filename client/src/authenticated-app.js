import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import Product from "./pages/Product";
import Page404 from './pages/404';
import FormArticleCreate from "./components/formulaire/ArticleCreate";
import FormArticleUpdate from "./components/formulaire/ArticleUpdate";

const AuthenticatedApp = () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Shop} />
                <Route path='/article/:id' component={Product} />
                <Route path='/admin/article/create' component={FormArticleCreate} />
                <Route path='/admin/article/edit/:id' component={FormArticleUpdate} />
                <Route exact path='/404' component={Page404} />
                <Redirect to="/404"/>
            </Switch>
        </Router>
    );
}

export default AuthenticatedApp;