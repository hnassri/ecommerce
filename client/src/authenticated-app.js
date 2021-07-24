import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import Product from "./pages/Product";
import Page404 from './pages/404';
import Admin from './pages/AdminUser/Admin';
import FormArticleCreate from "./components/formulaire/ArticleCreate";
import FormArticleUpdate from "./components/formulaire/ArticleUpdate";
import UserCreate from "./components/formulaire/UserCreate";
import { useAuth } from "./context/auth";
import IndexProductAdmin from "./pages/AdminProduct/IndexProductAdmin";
import IndexCategoryAdmin from "./pages/AdminCategories/IndexAdminCategories";
import Users from "./components/CommonComponents/Header/Header-top/Users/Users";
import UserUpdate from './components/formulaire/UserUpdate'

const AuthenticatedApp = () => {
    const { user } = useAuth();
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Shop} />
                <Route path='/article/:id' component={Product} />
                {user.role.includes("ROLE_ADMIN") ? 
                    <>
                        <Route path='/admin/users' component={Admin} />
                        <Route path='/admin/user/create' component={UserCreate} />
                        <Route path='/admin/user/edit/:id' component={UserUpdate}/>
                        <Route path='/admin/categories' component={IndexCategoryAdmin} />
                        <Route path='/admin/articles' component={IndexProductAdmin} />
                        <Route path='/admin/article/create' component={FormArticleCreate} />
                        <Route path='/admin/article/edit/:id' component={FormArticleUpdate} />
                    </>
                    : null
                }
                <Route exact path='/404' component={Page404} />
                <Redirect to="/404"/>
            </Switch>
        </Router>
    );
}

export default AuthenticatedApp;