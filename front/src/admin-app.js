import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from "./AdminPanel/components/Navbar";


const AdminPanel = () => {
    return(
        <Router>
            <Navbar/>
        </Router>
    );
}

export default AdminPanel;