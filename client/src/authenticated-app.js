import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import Product from "./pages/Product";
import Page404 from './pages/404';
import AdminPage from './pages/Admin/Admin';
import FormArticleCreate from "./components/formulaire/ArticleCreate";
import FormArticleUpdate from "./components/formulaire/ArticleUpdate";
import { useAuth } from "./context/auth";
import IndexProductAdmin from "./pages/AdminProduct/IndexProductAdmin";
import IndexCategoryAdmin from "./pages/AdminCategories/IndexAdminCategories";


const AuthenticatedApp = () => {
    const { user } = useAuth();
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Shop} />
                <Route path='/article/:id' component={Product} />
                {user.role.includes("ROLE_ADMIN") ? 
                    <>
                        <Route path='/admin/pages' component={AdminPage} />
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