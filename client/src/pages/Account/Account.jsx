import '../../App.css'
import React, { Component, useState } from "react"
import Header from '../../components/CommonComponents/Header/Header'
import Account_js from '../../components/Account/Account'



const Account = props => {
    return (
        <div class="main-wrapper">
            <Header />
           <Account_js/>
        </div>
       
    )
}

export default Account