import React, { Component ,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from "../../../../../context/auth"

const Users =props =>{
    const {logout} = useAuth();
    return(
        <li className="dropdown d-none d-lg-block">
        <button className="btn btn-link dropdown-toggle ht-btn p-0" type="button" id="settingButton" data-bs-toggle="dropdown" aria-label="setting" aria-expanded="false">
            <i className="pe-7s-users"></i>
        </button>
        <ul className="dropdown-menu" aria-labelledby="settingButton">
            <li><a className="dropdown-item" href="#">Mon compte</a></li>
            <li><a className="dropdown-item" href="/" onClick={logout}>Se déconnecter</a>
            </li>
        </ul>
    </li>
    )
}
export default Users;