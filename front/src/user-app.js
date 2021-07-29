import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './UserPanel/components/Navbar';
import Login from './UserPanel/pages/Login';
import Register from './UserPanel/pages/Register';
import Shop from './UserPanel/pages/Shop';
import Page404 from './UserPanel/pages/404/index'

const UserPanel = (props) => {
    return(
        <Router>
            <div className="main-wrapper">
                <Navbar {...props}/>
                <Switch>
                    <Route exact path="/" component={Shop}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path='/404' component={Page404} />
                    <Redirect to="/404"/>
                </Switch>
            </div>
            
        </Router>
    );
}

export default UserPanel;