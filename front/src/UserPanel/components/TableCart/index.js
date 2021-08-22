import React, { useState } from "react";
import { useCart } from "react-use-cart";
import CartTab from "../CartTab";

const TableCart = () => {
    const { items, isEmpty } = useCart();
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
                        {isEmpty ? "Votre panier est vide"
                            : 
                            items.map((value, index) => <CartTab key={index} item={value}/>)
                        }
                    </tbody>
                </table>
            </div>
        </form>

    )
}

export default TableCart;