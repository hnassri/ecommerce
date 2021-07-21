import React, { Component ,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from "../../../../../context/auth"
import { Link } from "react-router-dom";

const Users =props =>{
    const {logout} = useAuth();
    return(
        <li className="dropdown d-none d-lg-block">
        <button className="btn btn-link dropdown-toggle ht-btn p-0" type="button" id="settingButton" data-bs-toggle="dropdown" aria-label="setting" aria-expanded="false">
            <i className="pe-7s-users"></i>
        </button>
        <ul className="" aria-labelledby="settingButton">
            <li><Link to="/" className="dropdown-item">Mon compte</Link></li>
            <li><Link to ="/" className="dropdown-item" onClick={logout}>Se déconnecter</Link></li>
        </ul>
    </li>
    )
}
export default Users;