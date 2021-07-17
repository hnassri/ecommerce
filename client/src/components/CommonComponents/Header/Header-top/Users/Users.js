import React, { Component ,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Users =props =>{
    return(
        <li className="dropdown d-none d-lg-block">
        <button className="btn btn-link dropdown-toggle ht-btn p-0" type="button" id="settingButton" data-bs-toggle="dropdown" aria-label="setting" aria-expanded="false">
            <i className="pe-7s-users"></i>
        </button>
        <ul className="dropdown-menu" aria-labelledby="settingButton">
            <li><a className="dropdown-item" href="my-account.html">My account</a></li>
            <li><a className="dropdown-item" href="login-register.html">Login | Register</a>
            </li>
        </ul>
    </li>
    )
}
export default Users;