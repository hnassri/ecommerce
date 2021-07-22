import '../../App.css'
import React, { Component, useState } from "react"
import Header from '../../components/CommonComponents/Header/Header'
import Admin_create from '../../components/Admin/Create/CreateUser'



const Admin = props => {
    return (
        <div class="main-wrapper">
            <Header />
           <Admin_create/>
        </div>
       
    )
}

export default Admin