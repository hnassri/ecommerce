import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

const CoatsCart = () => {

    const { cartTotal } = useCart();
    
    return (
        <form>
            <div className="row">
                <div className="col-md-5 ml-auto">
                    <div className="cart-page-total">
                        <h2>Récapitulatif</h2>
                        <ul>
                        {/*<li>Frais de port <span>0.30€</span></li>*/}
                        <li>Prix total <span>{cartTotal}</span></li>
                        </ul>
                        <Link to="#">Procéder au paiement</Link>
                    </div>
                </div>
            </div>
    </form>

    )
}

export default CoatsCart;