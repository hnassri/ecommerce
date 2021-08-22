import axios from "../../../../axios/axios";
import React, { useEffect, useState } from "react";
import AdressBillingForm from './AdressBillingForm'
import AdressForm from './AdressForm'
import { useAuth } from "../../../../context/auth";

const Adress = () => {
    const [adress, setAdress] = useState("");
    const { token }= useAuth();

    const getAdress =() => {
        const header= { 
            "Authorization" : `Bearer ${token}`
        };
        axios.get('/adress/show',{headers:header})
        .then(res => {
            if(res.data.success===true){
                setAdress(res.data.items);
            }
        })
        .catch((error) => {
            if(error.response.data !== undefined && error.response.data.success === false){
                setAdress('');
            }else{
                console.log(error)
            }
        })
    }

    return (
        <div>
            {/* Component adresses sauvegardées */}
            <AdressBillingForm getAdress={getAdress} adress={adress}/>
            {/* Component ajouter une adresse */}
            <AdressForm getAdress={getAdress}/>
        </div>
    )
}

export default Adress;