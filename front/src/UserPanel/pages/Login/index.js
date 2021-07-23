import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import LoginForm from "../../components/LoginForm";

const Login = (props) => {
    return(
        <div className="main-content">
            <BreadCrumb name="Se connecter"/>
            <LoginForm {...props}/>
        </div>
    )
}

export default Login;