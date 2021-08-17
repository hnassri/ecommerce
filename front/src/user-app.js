import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './UserPanel/components/Navbar';
import Login from './UserPanel/pages/Login';
import Register from './UserPanel/pages/Register';
import Shop from './UserPanel/pages/Shop';
import Page404 from './UserPanel/pages/404/index'
import Product from './UserPanel/pages/Product/index'
import { useAuth } from "./context/auth";
import MyAccount from './UserPanel/pages/MyAccount/index'

const UserPanel = (props) => {
    const { user } = useAuth();
   
    let PrivateRoute;
    if (user) {
      PrivateRoute =
      <> 
        <Route path="/my-account" component={MyAccount}/> 
      </>
    } else {
      PrivateRoute = 
      <> 
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </>
    }

    return(
        <Router>
            <div className="main-wrapper">
                <Navbar {...props}/>
                <Switch>
                    <Route exact path="/" component={Shop}/>
                    <Route path='/article/:id' component={Product} />
                    <Route exact path='/404' component={Page404} />
                    {PrivateRoute}
                    <Redirect to='/404'/>
                </Switch>
            </div>
        </Router>
    );
}

export default UserPanel;