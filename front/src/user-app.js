import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './UserPanel/components/Navbar';
import Shop from './UserPanel/pages/Shop';

const UserPanel = () => {
    return(
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Shop}/>
            </Switch>
        </Router>
    );
}


export default UserPanel;