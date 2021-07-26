import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import ProductCart from "../../components/ProductCart";
import SideBar from "../../components/Sidebar";

const Shop = () => {
    return (
        <div className="main-content">
            <BreadCrumb name="Magasin"/>
            <div class="shop-area section-space-y-axis-100">
                <div class="container">
                    <div class="row">
                        <SideBar/>
                        <ProductCart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;