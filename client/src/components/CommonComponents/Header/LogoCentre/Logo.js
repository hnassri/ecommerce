import React, { Component ,useState} from "react"
import LogoCss from "./Logo.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Logo = props =>{

    return(
    <div>
        <a href="index.html" className="header-logo">
        <img src={process.env.PUBLIC_URL + '/images/logo/dark.png'}  alt="Header Logo" />         
        </a>
    </div>

    )

} 

export default Logo;
