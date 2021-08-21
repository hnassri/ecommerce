import React from "react";
import BreadCrumb from "../../../UserPanel/components/BreadCrumb";
import SlideBar from '../../components/SlideBar';
import DefaultAdmin from '../../components/DefaultAdmin';
import Product from '../../components/Product';
import Category from '../../components/Category';
import User from '../../components/Users'

const Admin = (props) => {
    return(
        <div className="main-content">
            
            <div className="account-page-area section-space-y-axis-100">
                <div className="container">
                    <div className="row">
                        {/* Sidebar */}
                        <SlideBar/>
                        <div className="col-lg-9">
                            <div className="tab-content myaccount-tab-content" id="account-page-tab-content">
                            {/* Component Administration */}
                            <DefaultAdmin/>
                            {/* Component Produit*/}
                            <Product/>
                            {/* Component catégories */}
                            <Category/>
                            {/* Component utilisateurs */}
                            <User/>
                            </div>
                        </div>
                    </div>
                </div>       
            </div>
        </div>

    )
}

export default Admin;