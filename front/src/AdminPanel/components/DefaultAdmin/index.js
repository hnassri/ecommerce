import React from "react";



const DefaultAdmin = (props) => {
    return(
    <div className="tab-pane fade show active" id="account-dashboard" role="tabpanel" aria-labelledby="account-dashboard-tab">
        <div className="myaccount-dashboard">
            <p>Bienvenue <strong>Administrateur</strong></p>
            <p>Ici, vous pouvez gérer les utilisateurs inscrits, modifier, créer de nouveaux produits et catégories.</p>
        </div>
    </div>

    )
}

export default DefaultAdmin;