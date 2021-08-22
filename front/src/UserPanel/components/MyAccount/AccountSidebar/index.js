import React, { useState } from "react";
import { Link } from 'react-router-dom';


const AccountSidebar= (props) => {

    return (
       <div className="col-lg-3">
            <ul className="nav myaccount-tab-trigger" id="account-page-tab" role="tablist">
                <li className="nav-item">
                <a className="nav-link active" id="account-dashboard-tab" data-bs-toggle="tab" href="#account-dashboard" role="tab" aria-controls="account-dashboard" aria-selected="true">Mon compte</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" id="account-orders-tab" data-bs-toggle="tab" href="#account-orders" role="tab" aria-controls="account-orders" aria-selected="false">Commandes</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" id="account-address-tab" data-bs-toggle="tab" href="#account-address" role="tab" aria-controls="account-address" aria-selected="false">Adresse de facturation</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" id="account-details-tab" data-bs-toggle="tab" href="#account-details" role="tab" aria-controls="account-details" aria-selected="false">Changer de mot de passe</a>
                </li>
            </ul>
        </div>
    )
}

export default AccountSidebar;