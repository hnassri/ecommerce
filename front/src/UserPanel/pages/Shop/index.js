import axios from "../../../axios/axios";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import ProductCart from "../../components/ProductCart";
import SideBar from "../../components/Sidebar";

const Shop = () => {
    const [articles, setArticles] = useState([]);
    const getArticles = () => {
        axios.get("/article")
        .then(res => {
            if(res.data.success === true){
                setArticles(res.data.items);
            }
        })
        .catch(e => {
            if(e.response.data.success === false){
                alert(e.response.data.message);
            }else{
                alert("An error occured");
            }
        })
    }
    useEffect(() => {
        getArticles();
    }, []);
    return (
        <div className="main-content">
            <BreadCrumb name="Magasin"/>
            <div className="shop-area section-space-y-axis-100">
                <div className="container">
                    <div className="row">
                        <SideBar/>
                        <div className="col-xl-9 col-lg-8 order-1 order-lg-2">
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="grid-view" role="tabpanel" aria-labelledby="grid-view-tab">
                                    <div className="product-grid-view row g-y-20">
                                        {articles.map((value, index) => {
                                            return <ProductCart article={value} key={index}/>;
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;