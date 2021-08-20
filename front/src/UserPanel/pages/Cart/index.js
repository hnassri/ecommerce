import axios from "../../../axios/axios";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb"
import CoatsCart from "../../components/CostsCart"
import CouponCart from "../../components/CouponCart"
import TableCart from "../../components/TableCart"
import { useCart } from "react-use-cart";
const Cart = () => {
    return (
       <div className="main-content">
            <div className="cart-area section-space-y-axis-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        {/* Tableau panier */}
                        <TableCart/>
                        {/* Coupon panier (Optionnel) */}
                        <CouponCart/>
                        {/* Frais panier */}
                        <CoatsCart/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cart;