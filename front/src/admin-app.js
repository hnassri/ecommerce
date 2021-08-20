import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Admin from './AdminPanel/pages/Admin'
import Navbar from "./UserPanel/components/Navbar";
import Page404 from "./UserPanel/pages/404";
import page404 from "./UserPanel/pages/404" 
const AdminPanel = () => {
   
  
    return(
        <Router>
            <Switch>
                <Route exact path="/admin" component={Admin}/>
            </Switch>
        </Router>
    );
}

export default AdminPanel;