import React, { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import { useAuth } from "../../../../context/auth";
import axios from "../../../../axios/axios";
import axioss from 'axios'
const AdressForm= (props) => {
const [name, setName] = useState("");
const [surname, setSurname] = useState("");
const [adress, setAdress] = useState("");
const [city, setCity] = useState("");
const [postal_code, setPostal_Code] = useState("");
const [country, setCountry] = useState("");
const { token }=useAuth();
const [data, setData] = useState("");

useEffect(() => {
    axioss.get('https://restcountries.eu/rest/v2/all')
    .then(res => {
        setData(
        res.data.map((user) => (
            <option value={user.name}>{user.name}</option>
        ))
        )
    })
    .catch((error) => {
        console.log(error.response)
    })
}, []);
const handlesubmit = (e) =>{
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", name);
    formData.append("surname", surname);
    formData.append("adress", adress);
    formData.append("city", city);
    formData.append("postal_code", postal_code);
    formData.append("country", country);
    const header= { 
            "Content-Type": "multipart/form-data",
            "Authorization" : `Bearer ${token}`
    };
    axios.post('/adress/create',formData,{headers:header})
    .then(res => {
        alert(res.data.message)
    })
    .catch((error) => {
        alert(error.response.data.message)
    })
   
}



    return (
       <form onSubmit={handlesubmit}>
            <div className="checkbox-form">
                <div className="row">
                <div className="col-md-12">
                    <br />
                    <h4 className="small-title">Ajouter une adresse</h4>
                    <br />
                </div>
                <div className="col-md-6">
                    <div className="checkout-form-list">
                    <label>Prénom <span className="required">*</span></label>
                    <input placeholder="Prénom" type="text" onChange={event => setSurname(event.target.value)}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="checkout-form-list">
                    <label>Nom <span className="required">*</span></label>
                    <input placeholder="Nom" type="text" onChange={event=>setName(event.target.value)}/>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="checkout-form-list">
                    <label>Adresse de livraison <span className="required">*</span></label>
                    <input placeholder="Adresse de livraison" type="text" onChange={event=>setAdress(event.target.value)}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="checkout-form-list">
                    <label>Ville <span className="required">*</span></label>
                    <input placeholder="Ville" type="text" onChange={event => setCity(event.target.value)}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="checkout-form-list">
                    <label>Code postale <span className="required">*</span></label>
                    <input placeholder="Code postale" type="text" onChange={event => setPostal_Code(event.target.value)}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="country-select clearfix">
                        <label>Pays <span className="required">*</span></label>
                        <select className="myniceselect nice-select wide" onChange={event =>setCountry(event.target.value)}>
                            <option value="">CHOISIR UN PAYS</option>
                            {data}
                        </select>
                    </div>
                </div>
                <div className="single-input">
                    <button className="btn btn-custom-size lg-size btn-webshop-primary" type="submit">
                    <span>Sauvegarder</span>
                    </button>
                </div>
                </div>
            </div>
        </form>


    )
}

export default AdressForm;