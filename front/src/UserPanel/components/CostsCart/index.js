import axios from "../../../axios/axios";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb"

const CoatsCart = () => {
    
    return (
        <form>
            <div className="row">
                <div className="col-md-5 ml-auto">
                    <div className="cart-page-total">
                        <h2>Récapitulatif</h2>
                        <ul>
                        <li>Frais de port <span>0.30€</span></li>
                        <li>Prix total <span>30.50€</span></li>
                        </ul>
                        <a href="#">Procéder au paiement</a>
                    </div>
                </div>
            </div>
    </form>

    )
}

export default CoatsCart;