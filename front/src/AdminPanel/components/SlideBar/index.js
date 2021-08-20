import React from "react";



const SlideBar = (props) => {
    return(
    <div className="col-lg-3">
        <ul className="nav myaccount-tab-trigger" id="account-page-tab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" id="account-dashboard-tab" data-bs-toggle="tab" href="#account-dashboard" role="tab" aria-controls="account-dashboard" aria-selected="true">Administration</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="account-orders-tab" data-bs-toggle="tab" href="#account-orders" role="tab" aria-controls="account-orders" aria-selected="false">Gérer les produits</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="account-address-tab" data-bs-toggle="tab" href="#account-address" role="tab" aria-controls="account-address" aria-selected="false">Gérer les catégories</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="account-details-tab" data-bs-toggle="tab" href="#account-details" role="tab" aria-controls="account-details" aria-selected="false">Gérer les utilisateurs</a>
            </li>
        </ul>
    </div>

    )
}

export default SlideBar;