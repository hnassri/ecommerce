import axios from "../../../axios/axios";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb"
import { useParams } from 'react-router-dom';
import MyAccountForm from '../../components/MyAccountForm'

const MyAccount = () => {
    
    return (
        <div className="main-content">
            <BreadCrumb name="my-account"/>
            <MyAccountForm/>
        </div>
    )
}

export default MyAccount;