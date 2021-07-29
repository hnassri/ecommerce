import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './UserPanel/components/Navbar';
import Login from './UserPanel/pages/Login';
import Register from './UserPanel/pages/Register';
import Shop from './UserPanel/pages/Shop';

const UserPanel = (props) => {
    return(
        <Router>
            <div className="main-wrapper">
                <Navbar {...props}/>
                <Switch>
                    <Route exact path="/" component={Shop}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                </Switch>
            </div>
            
        </Router>
    );
}

export default UserPanel;