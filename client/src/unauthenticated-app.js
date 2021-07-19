import Auth from './pages/Auth';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Page404 from './pages/404';

const UnauthenticatedApp = () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/' component={Auth} />
                <Route exact path='/login' component={Auth} />
                <Route exact path='/signup' component={Auth} />
                <Route exact path='/404' component={Page404} />
                <Redirect to="/404"/>
            </Switch>
        </Router>
    );
}


export default UnauthenticatedApp;