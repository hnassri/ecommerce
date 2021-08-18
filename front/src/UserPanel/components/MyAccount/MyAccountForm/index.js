import axios from "../../../../axios/axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../../context/auth"



const MyAccountForm = (props) => {
    const { user } = useAuth();
    const [newpassword, setNewPassword] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const {token} = useAuth();
    const handleSubmit = async e => {
          
        e.preventDefault();

        const users = {
          password: password,
          newpassword: newpassword
        }

        if(newpassword.length < 6){
            alert(" Mot de passe trop court");
        }
        if(newpassword!=confirmpassword){
            alert("Vos mots de passes sont pas identiques");
        }
      

        const api = '/api/v1/user/edit/password'; 
        var bodyFormData = new FormData();
        bodyFormData.append('password', password);
        bodyFormData.append('newpassword', newpassword);
        axios.post({
            url: api,
            data: bodyFormData,
            headers: { 
               
                "Authorization" : `Bearer ${token}`
            },
          })
        .then(res => {
        console.log(res);
        })
        .catch((e) => {
        console.log(e)
        });
    }
 

    return(
      <div className="tab-pane fade" id="account-details" role="tabpanel" aria-labelledby="account-details-tab">
            <div className="myaccount-details">
                <form action="#" className="myaccount-form">
                <div className="myaccount-form-inner">
                    <div className="single-input">
                    <label>Mot de passe actuel (Laisser vide si aucun changement) <span className="required">*</span></label>
                    <input placeholder="Mot de passe actuel" type="password" />
                    </div>
                    <div className="single-input">
                    <label>Nouveau Mot de passe (Laisser vide si aucun changement) <span className="required">*</span></label>
                    <input placeholder="Nouveau Mot de passe" type="password" />
                    </div>
                    <div className="single-input">
                    <label>Confirmer le Nouveau Mot de passe (Laisser vide si aucun changement) <span className="required">*</span></label>
                    <input placeholder="Confirmer le Nouveau Mot de passe" type="password" />
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