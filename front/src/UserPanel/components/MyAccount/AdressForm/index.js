import React, { useState } from "react";
import { Link } from 'react-router-dom';


const AdressForm= (props) => {

    return (
       <form>
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
                    <input placeholder="Prénom" type="text" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="checkout-form-list">
                    <label>Nom <span className="required">*</span></label>
                    <input placeholder="Nom" type="text" />
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="checkout-form-list">
                    <label>Adresse de livraison <span className="required">*</span></label>
                    <input placeholder="Adresse de livraison" type="text" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="checkout-form-list">
                    <label>Ville <span className="required">*</span></label>
                    <input placeholder="Ville" type="text" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="checkout-form-list">
                    <label>Région <span className="required">*</span></label>
                    <input placeholder="Région" type="text" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="checkout-form-list">
                    <label>Code postale <span className="required">*</span></label>
                    <input placeholder="Code postale" type="text" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="country-select clearfix">
                    <label>Pays <span className="required">*</span></label>
                    <select className="myniceselect nice-select wide">
                        <option data-display="France">France</option>
                        <option value="Royaume-Uni">Royaume-Uni</option>
                        <option value="Allemagne">Allemagne</option>
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