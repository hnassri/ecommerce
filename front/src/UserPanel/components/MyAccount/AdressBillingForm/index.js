import React, { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from '../../../../axios/axios'
import { useAuth } from "../../../../context/auth";

const AdressBillingForm= (props) => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [adress, setAdress] = useState("");
    const [city, setCity] = useState("");
    const [postal_code, setPostal_Code] = useState("");
    const [country, setCountry] = useState("");
    const { token }= useAuth();
    const [data, setData] = useState("");
    useEffect(()=>{
        getAdress();
    }, []);
       
    const getAdress =() => {
        const header= { 
            "Authorization" : `Bearer ${token}`
        };
        axios.get('/adress/show',{headers:header})
        .then(res => {
            if(res.data.success===true){
                setData(
                    res.data.items.map((value) =>(
                        <tr>
                        <td className="product-name">{value.surname}</td>
                        <td className="product-name">{value.name}</td>
                        <td className="product-name">{value.adress}</td>
                        <td className="product-name">{value.city}</td>
                        <td className="product-name">{value.postalCode}</td>
                        <td className="product-name">{value.country}</td>
                        <td className="product_remove">
                        <button className="btn btn-danger" onClick={() =>{handleRemoveUser(value.id)}}><i class="pe-7s-close" data-tippy="Supprimer" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder"></i></button>
                        </td>
                        </tr>
                    )
                ))
            }
           
        })
        .catch((error) => {
         console.log(error)
        })
    }


    const handleRemoveUser = (id) => {
        
        const header = {
            "Authorization" : `Bearer ${token}`
        };
        axios.delete('/adress/delete/'+id, { headers:header})
        .then((res) => {
            getAdress();
            console.log(res);
        })
        .catch((error) => {
            console.log(error.response)
        })
    }
  


    return (
        <div>
            <h3>Adresse de facturation</h3>
            <div className="row">
                <div className="col">
                    <div className="table-content table-responsive">
                        {data ?
                        <table className="table">
                        <thead>
                            <tr>
                                <th className="cart-product-name">Prénom</th>
                                <th className="cart-product-name">Nom</th>
                                <th className="cart-product-name">Adresse de livraison</th>
                                <th className="cart-product-name">Ville</th>
                                <th className="cart-product-name">Code postale</th>
                                <th className="cart-product-name">Pays</th>
                                <th className="product_remove">Supprimer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data}
                        </tbody>
                    </table>
                        :
                            <p>AUCUNE ADRESSE SAUVEGARÉE</p>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdressBillingForm;