import React, { Component ,useState} from "react"
import Phone_css from "./Phone.css";


const Phone = props =>{

    return(
        <div className="header-contact d-none d-lg-flex">
        <i className="pe-7s-call"></i>
        <a href="tel://+00-123-456-789">+00 123 456 789</a>
    </div>
   
    )

} 

export default Phone;