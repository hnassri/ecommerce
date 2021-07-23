import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import RegisterForm from "../../components/RegisterForm";

const Register = (props) => {
    return(
        <div className="main-content">
            <BreadCrumb name="S'inscrire"/>
            <RegisterForm {...props}/>
        </div>
    )
}

export default Register;