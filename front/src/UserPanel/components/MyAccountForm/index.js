import axios from "../../../axios/axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/auth"



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
        <div className="container d-flex flex-column flex-lg-row justify-content-lg-center pane">
            <div className="row col-3">
                <img src="/assets/images/Profil/d.png" alt="Header Logo"/>
            </div>

                <div className="col-8 text-center">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                name="password"
                                placeholder="password"
                                onChange={event => setPassword(event.target.value)}
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                name="newpassword"
                                placeholder="new password"
                                onChange={event => setNewPassword(event.target.value)}
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                name="confirmpassword"
                                placeholder="confirm password"
                                onChange={event => setConfirmPassword(event.target.value)}
                            />
                        </div>
                        <br />
                        <div>
                            <button className="btn btn-login btn-outline-success " type="submit">
                            SAVE 
                            </button>
                        </div>
                    </form>
                </div>
        </div>
    )
}

export default MyAccountForm;