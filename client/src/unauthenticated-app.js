import Auth from './pages/Auth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const UnauthenticatedApp = () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Auth} />
                <Route exact path='/login' component={Auth} />
                <Route exact path='/signup' component={Auth} />
            </Switch>
        </Router>
    );
}


export default UnauthenticatedApp;