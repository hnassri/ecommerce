import React, { useState } from 'react';
import '../style.css';
import { useAuth } from '../../../context/auth';
import { Redirect,Link } from "react-router-dom";
const SetingUpFrom = () => {
    const { register, user } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirm, setPasswordConfirm] = useState("");
    console.log(user)
    const handleSubmit = (e) => {
      e.preventDefault();
      if(password === password_confirm){
          register(email, password);
      }
      
    }
    return (
        <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
                <div className="login-form">
                    <h4 className="login-title">Register</h4>
                    <div className="row">
                        <div className="col-lg-12">
                            <label>Email Address*</label>
                            <input type="email" placeholder="Email Address" onChange={event => setEmail(event.target.value)}/>
                        </div>
                        <div className="col-lg-12">
                            <label>Password</label>
                            <input type="password" placeholder="Password" onChange={event => setPassword(event.target.value)}/>
                        </div>
                        <div className="col-lg-12">
                            <label>Password Confirm</label>
                            <input type="password" placeholder="Confirm your password" onChange={event => setPasswordConfirm(event.target.value)}/>
                        </div>
                        <div className="col-md-8">
                            <div className="check-box">
                                <input type="checkbox" id="remember_me" />
                                <label htmlFor="remember_me">Remember me</label>
                            </div>
                        </div>
                        <div className="col-md-4 pt-1 mt-md-0">
                            <div className="forgotton-password_info">
                                <a href="#"> Forgotten pasward?</a>
                            </div>
                        </div>
                        <div className="col-lg-12 pt-5">
                            <button className="btn btn-custom-size lg-size btn-webshop-primary">Register</button>
                            <p> Cliquez sur ce lien pour <Link to='/login'>
                                se connecter
                            </Link></p>
                        </div>     
                    </div>
                </div>
            </form>
        </div>

    )
}

export default SetingUpFrom;