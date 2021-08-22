import React, { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from '../../../../../axios/axios'
import { useAuth } from "../../../../../context/auth";
import AdressTab from "../AdressTab";

const AdressBillingForm= (props) => {
    const { token }= useAuth();
    const getAdress = props.getAdress;
    const adress = props.adress;
    useEffect(()=>{
        getAdress();
    }, []);

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
            if(error.response.data !== undefined && error.response.data.success === true){
                
                getAdress();
            }else {
                console.log(error.response.data)
            }
        })
    }
  


    return (
        <div>
            <h3>Adresse de facturation</h3>
            <div className="row">
                <div className="col">
                    <div className="table-content table-responsive">
                        {adress ?
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
                                {adress.map((value, index) => ( <AdressTab value={value} key={index} handleRemoveUser={handleRemoveUser}/> ))}
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