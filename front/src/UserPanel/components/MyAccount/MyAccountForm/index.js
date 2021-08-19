import axios from "../../../../axios/axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../../context/auth"
import qs from 'qs';


const MyAccountForm = (props) => {
    const [newpassword, setNewPassword] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const {token} = useAuth();
    const handleSubmit =  (e) => {
          
        e.preventDefault();

        if(newpassword.length < 6){
            alert(" Mot de passe trop court");
        }
        if(newpassword!=confirmpassword){
            alert("Vos mots de passes sont pas identiques");
        }

        const data = { 'password': password,'newpassword':newpassword};
        const users=qs.stringify(data);
        const headers= { headers:{'content-type': 'application/x-www-form-urlencoded',"Authorization" : `Bearer ${token}`}};
 
        axios.patch("/user/edit/passsword",users, headers)
        .then(res => {
            if(res.data.success){
                alert('Le mot de passe a été changé avec succés')
            }
            else{
                alert('mot de passe actuel incorrect')
            };
        })
        .catch((error) => {
            console.log(error.response.data)
        });
       
    }
 

    return(
      <div className="tab-pane fade" id="account-details" role="tabpanel" aria-labelledby="account-details-tab">
            <div className="myaccount-details">
                <form onSubmit={handleSubmit} className="myaccount-form">
                <div className="myaccount-form-inner">
                    <div className="single-input">
                        <label>Mot de passe actuel (Laisser vide si aucun changement) <span className="required">*</span></label>
                        <input placeholder="Mot de passe actuel" type="password" onChange={event => setPassword(event.target.value)}/>
                    </div>
                    <div className="single-input">
                        <label>Nouveau Mot de passe (Laisser vide si aucun changement) <span className="required">*</span></label>
                        <input placeholder="Nouveau Mot de passe" type="password" onChange={event => setNewPassword(event.target.value)}/>
                    </div>
                    <div className="single-input">
                        <label>Confirmer le Nouveau Mot de passe (Laisser vide si aucun changement) <span className="required">*</span></label>
                        <input placeholder="Confirmer le Nouveau Mot de passe" type="password" onChange={event => setConfirmPassword(event.target.value)}/>
                    </div>
                    <div className="single-input">
                    <button className="btn btn-custom-size lg-size btn-webshop-primary" type="submit">
                        <span>Sauvegarder</span>
                    </button>
                    </div>
                </div>
                </form>
            </div>
        </div>

    )
}

export default MyAccountForm;