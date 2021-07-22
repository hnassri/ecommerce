import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import BreadCrumb from './UserPanel/components/BreadCrumb';
import Navbar from './UserPanel/components/Navbar';

const UserPanel = () => {
    return(
        <Router>
            <Navbar/>
            <BreadCrumb name="Magasin" />
        </Router>
    );
}


export default UserPanel;