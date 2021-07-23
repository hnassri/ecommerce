import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../../../context/auth';

const RegisterForm = (props) => {
    const { register } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirm, setPasswordConfirm] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(password === password_confirm){
            register(email, password, props);
        }
    }
    return (
        <div className="login-register-area section-space-y-axis-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-md-3">
                        <form onSubmit={handleSubmit}>
                            <div className="login-form">
                                <h4 className="login-title">S'inscrire</h4>
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
                                    <div className="col-md-12 pt-1 mt-md-0">
                                        <div className="forgotton-password_info">
                                            <p>Déjà inscrit ? <Link to="/login">Se connecter ici</Link>.</p>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-custom-size lg-size btn-webshop-primary">S'inscrire</button>
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

export default RegisterForm;