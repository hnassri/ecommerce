import { Link } from 'react-router-dom';
import axios from '../../../../axios/axios';
import { useAuth } from "../../../../context/auth";
import React, { useEffect,useState } from "react";


const DetailAdmin = (props) => {
    const { token } = useAuth();
    const users = props.user;
    
    const HandleUpdateUser = () => {
        return props.history.push(`/DetailAdmin/user/edit/${users.id}`);
    }

    return (
           <tbody>
           <tr>
                <td className="product-name">{users.email}</td>
                <td className="product-name">{users.roles[0]}</td>
               <td className="product_remove">
                       <i className="btn btn-danger" data-tippy="Supprimer" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" onClick={() => {props.remove(users.id)}} >
                       Supprimer l'utilisateur</i>
               </td>
           </tr>
       </tbody>
    )
}

export default DetailAdmin;