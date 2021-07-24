import React, { useState } from "react";
import { useAuth } from "../../context/auth";
import axios from "axios";


const Admin = (props) => {
    const { token } = useAuth();
    const users = props.user;
    const HandleUpdateUser = () => {
        return props.history.push(`/admin/user/edit/${users.id}`);
    }

    return (
        <tbody>
            <tr>
                <td className="product_remove">
                    <button className="btn btn-danger" onClick={() => {props.remove(users.id)}}>Supprimer l'utilisateur</button>
                </td>
                <td className="product-name">{users.email}</td>
                <td className="product-name">{users.roles[0]}</td>
                <td>
                    <button type="submit" className="btn btn-success" onClick={() => HandleUpdateUser()}>Modifier</button>
                </td>
            </tr>
        </tbody>
    )
}

export default Admin;