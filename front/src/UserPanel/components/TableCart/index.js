import axios from "../../../axios/axios";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb"

const TableCart = () => {
    
    return (
        <form>
            <div className="table-content table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="product_remove">Supprimer</th>
                            <th className="product-thumbnail">Images</th>
                            <th className="cart-product-name">Produits</th>
                            <th className="product-price">Prix</th>
                            <th className="product-quantity">Quantité</th>
                            <th className="product-subtotal">Prix total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="product_remove">
                            <a href="#">
                                <i className="pe-7s-close" data-tippy="Supprimer" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" />
                            </a>
                        </td>
                        <td className="product-thumbnail">
                            <a href="#">
                                <img src="assets/images/product/small-size/1-1-112x124.png" alt="Image produit" />
                            </a>
                        </td>
                        <td className="product-name"><a href="#">Produit 1</a></td>
                        <td className="product-price"><span className="amount">30.20€</span></td>
                        <td className="quantity">
                            <div className="cart-plus-minus">
                                <input className="cart-plus-minus-box" defaultValue={1} type="text" />
                            <div className="dec qtybutton">
                                <i className="fa fa-minus" />
                            </div>
                            <div className="inc qtybutton">
                                <i className="fa fa-plus" />
                            </div>
                            </div>
                        </td>
                        <td className="product-subtotal"><span className="amount">30.20€</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </form>

    )
}

export default TableCart;