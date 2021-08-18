import React, { useState } from "react";
import { Link } from 'react-router-dom';

const AdressBillingForm= (props) => {

    return (
        <form>
            <h3>Adresse de facturation</h3>
            <div className="row">
                <div className="col">
                <div className="table-content table-responsive">
                    <table className="table">
                    <thead>
                        <tr>
                        <th className="cart-product-name">Prénom</th>
                        <th className="cart-product-name">Nom</th>
                        <th className="cart-product-name">Adresse de livraison</th>
                        <th className="cart-product-name">Ville</th>
                        <th className="cart-product-name">Région</th>
                        <th className="cart-product-name">Code postale</th>
                        <th className="cart-product-name">Pays</th>
                        <th className="product_remove">Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="product-name">Hamdi</td>
                        <td className="product-name">Nassri</td>
                        <td className="product-name">4 rue du dôme</td>
                        <td className="product-name">Strasbourg</td>
                        <td className="product-name">Alsace</td>
                        <td className="product-name">67000</td>
                        <td className="product-name">France</td>
                        <td className="product_remove"><a href="#"><i className="pe-7s-close" data-tippy="Supprimer" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" /></a></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </form>
    )
}

export default AdressBillingForm;