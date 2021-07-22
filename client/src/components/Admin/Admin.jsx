import React, { Component, useState,useEffect } from "react"
import { useAuth } from "../../context/auth";
import axios from 'axios';
import ListUser from "./ListUser/ListUser";
import Users from "../CommonComponents/Header/Header-top/Users/Users";


const Admin = props => {

    const api = 'http://206.81.25.252:8000/api/v1/user/all'; 
    const [User, setUser] = useState('')
    const {token} = useAuth();
useEffect(() => {
    axios({
        method: "get",
        url: api,
        headers: { 
           
            "Authorization" : `Bearer ${token}`
        },
      })
    .then(res => {
    setUser(
      <div>
      {res.data.data.map((utilisateur) => (
          <ListUser
          email={utilisateur.email}
          role={utilisateur.roles[0]}
          />
           ))}
       
      </div>
    );
   
    })
    .catch((e) => {
    console.log(e.response)
    });
}, []); 



    return (
      <> {User}</>
      
    )
}

export default Admin