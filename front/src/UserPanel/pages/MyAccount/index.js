import axios from "../../../axios/axios";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb"
import { useParams } from 'react-router-dom';
import MyAccountForm from '../../components/MyAccount/MyAccountForm'
import AccountSidebar from '../../components/MyAccount/AccountSidebar'
import DefaultAccount from '../../components/MyAccount/DefaultAccount'
import MyOrders from '../../components/MyAccount/MyOrders'
import AdressBillingForm from '../../components/MyAccount/Adress/AdressBillingForm'
import AdressForm from '../../components/MyAccount/Adress/AdressForm'
import Adress from "../../components/MyAccount/Adress";

const MyAccount = () => {
    
    return (
       <div className="main-wrapper">
            <div className="main-content">
                <div className="account-page-area section-space-y-axis-100">
                <div className="container">
                    <div className="row">
                    {/* AccountSidebar */}
                    <AccountSidebar/>
                    <div className="col-lg-9">
                        <div className="tab-content myaccount-tab-content" id="account-page-tab-content">
                        {/* Component Mon compte */}
                        <DefaultAccount/>
                        {/* Component Mes commandes*/}
                        <MyOrders/>
                        {/* Facturation */}
                        <div className="tab-pane fade" id="account-address" role="tabpanel" aria-labelledby="account-address-tab">
                            <div className="row">
                            <div className="col-lg-12 col-12">
                                <Adress/>
                            </div>
                            </div>
                        </div>
                        {/* Facturation */}
                        {/* Component changement de mot de passe */}
                        <MyAccountForm/>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}

export default MyAccount;