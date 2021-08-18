import React, { useState } from "react";
import { Link } from 'react-router-dom';


const DefaultAccount= (props) => {

    return (
       <div className="tab-pane fade show active" id="account-dashboard" role="tabpanel" aria-labelledby="account-dashboard-tab">
            <div className="myaccount-dashboard">
                <p>Bonjour !</p>
                <p>Ici, vous pouvez modifier les détails de votre compte, ainsi que vos identifiants de connexion.</p>
            </div>
        </div>


    )
}

export default DefaultAccount;