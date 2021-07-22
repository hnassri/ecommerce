import React, { Component ,useState} from "react"
import LogoCss from "./Logo.css";


const Logo = props =>{

    return(
    <div>
        <a href="index.html" className="header-logo">
            <img src="assets/images/logo/dark.png" alt="Header Logo" />
        </a>
    </div>

    )

} 

export default Logo;