import React, { useEffect,useState } from "react";
import { Link } from 'react-router-dom';
import axios from '../../../../axios/axios';
import { useAuth } from "../../../../context/auth";
const UserCreate = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirm, setPasswordConfirm] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(password!=password_confirm){
            alert("les mots de passes sont pas identiques");
        }
        else{
        let formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        const header = {
            "Content-Type": "multipart/form-data"
        }
        axios.post("/api/v1/register", formData, header)
            .then(res => {
                alert(res.data.payload);
                return props.history.push("/admin");
                
            })
            .catch(e => {
                alert(e.response.data.error);
            })
        }
      
    }
    return (
        <div className="login-register-area section-space-y-axis-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-md-3">
                    <div className="price-box">
                        <Link to="/admin">&larr; Retour</Link>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="login-form">
                            <h4 className="login-title">ENREGISTRER UN UTILISATEUR</h4>
                            <div className="row">
                                <div className="col-md-12">
                                    <label>Adresse Email</label>
                                    <input type="email" placeholder="Adresse Email" onChange={event => setEmail(event.target.value)}/>
                                </div>
                                <div className="col-md-6">
                                    <label>Mot de passe</label>
                                    <input type="password" placeholder="Mot de passe" onChange={event => setPassword(event.target.value)}/>
                                </div>
                                <div className="col-md-6">
                                    <label>Confirmer le Mot de passe</label>
                                    <input type="password" placeholder="Confirmer le Mot de passe" onChange={event => setPasswordConfirm(event.target.value)}/>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-custom-size lg-size btn-webshop-primary">Sauvegarder</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default UserCreate;