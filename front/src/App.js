import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './UserPanel/components/Navbar';
import Login from './UserPanel/pages/Login';
import Register from './UserPanel/pages/Register';
import Shop from './UserPanel/pages/Shop';
import Page404 from './UserPanel/pages/404/index'
import Product from './UserPanel/pages/Product/index'
import Cart from './UserPanel//pages/Cart'
import { useAuth } from "./context/auth";
import MyAccount from './UserPanel/pages/MyAccount/index'
import Admin from './AdminPanel/pages/Admin';
import ProductCreate from './AdminPanel/components/Product/ProductCreate';
import UserUpdate from './AdminPanel/components/Users/UserUpdate';
import UserCreate from './AdminPanel/components/Users/UserCreate';

const App = (props) => {
    const { user } = useAuth();  
    return user ? <AuthenticatedApp {...props} /> : <UnauthenticatedApp {...props}/>
}

const AuthenticatedApp = (props) => {
    const { user } = useAuth();  
    return(
        <Router>
            <div className="main-wrapper">
                <Navbar {...props}/>
                <Switch>
                    {/* Default Route */}
                    <Route exact path="/" component={Shop}/>
                    <Route path='/article/:id' component={Product} />
                    <Route exact path='/404' component={Page404} /> 
                    <Route exact path='/cart' component={Cart} /> 
                    
                    {/* Authenticated Route */}
                    <Route path="/my-account" component={MyAccount}/>
                    
                    
                    {/* Admin Route */}
                    {user.role.includes("ROLE_ADMIN") ? 
                        <>
                            <Route exact path="/admin" component={Admin}/>
                            <Route path="/admin/create/product" component={ProductCreate}/>
                            <Route path="/admin/create/user" component={UserCreate}/>
                        </>
                        : null
                    }
                    {/* Redirect */}
                    <Redirect to="/404"/>
                </Switch>
            </div>
        </Router>
    )
}

const UnauthenticatedApp = (props) => {
    return(
        <Router>
            <div className="main-wrapper">
                <Navbar {...props}/>
                <Switch>
                    {/* Default Route */}
                    <Route exact path="/" component={Shop}/>
                    <Route path='/article/:id' component={Product} />
                    <Route exact path='/404' component={Page404} /> 
                    <Route exact path='/cart' component={Cart} /> 
                    
                    {/* Unauthenticated Route */}
                    <Route  path="/login" component={Login}/> 
                    <Route  path="/register" component={Register}/>

                    {/* Redirect */}
                    <Redirect to="/404"/>
                </Switch>
            </div>
        </Router>
    )
}

export default App;