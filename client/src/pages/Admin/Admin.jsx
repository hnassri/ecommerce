import '../../App.css'
import React, { Component, useState } from "react"
import Header from '../../components/CommonComponents/Header/Header'
import Admin_user from '../../components/Admin/Admin'



const Admin = props => {
    return (
        <div class="main-wrapper">
            <Header />
           <Admin_user/>
        </div>
       
    )
}

export default Admin