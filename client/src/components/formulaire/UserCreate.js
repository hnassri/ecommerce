import React, { useState } from 'react';
import { Redirect,Link } from "react-router-dom";
import axios from 'axios'
const UserCreate = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirm, setPasswordConfirm] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(password!=password_confirm){
            alert("les mots de passes sont pas identiques");
        }
        let formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        const header = {
            "Content-Type": "multipart/form-data"
        }
        axios.post("http://206.81.25.252:8000/api/v1/register", formData, header)
            .then(res => {
                alert(res.data.payload);
                return props.history.push("/admin/users");
            })
            .catch(e => {
                alert(e.response.data.error);
            })
      
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
                        <div className="col-lg-12 pt-5">
                            <button className="btn btn-custom-size lg-size btn-webshop-primary">Register</button>
                        </div>     
                    </div>
                </div>
            </form>
        </div>

    )
}

export default UserCreate;