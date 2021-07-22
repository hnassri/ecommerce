import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductDetailAdmin from "../../components/ProductDetailAdmin/index"
import { useAuth } from "../../context/auth";

const IndexProductAdmin = (props) => {
    const { token } = useAuth();
    const [articles, setArticles] = useState([]);

    const getArticles = () => {
        const header = {
            "Content-Type": "multipart/form-data",
            "Authorization" : `Bearer ${token}`
        };
        axios.get("http://206.81.25.252:8000/article", {headers: header})
        .then(res => {
            const data = res.data;
            if(data.success === true){
                setArticles(data.items);
            }
        })
    }
    const handleRemoveProduct = (id) => {
        const header = {
            "Content-Type": "multipart/form-data",
            "Authorization" : `Bearer ${token}`
        };
        axios.delete("http://206.81.25.252:8000/article/" + id, {headers: header})
        .then(res => {
            const data = res.data;
            if(data.success === true){
                getArticles();
            }else{
                console.log("Une erreur est survenue");
            }
        })
    }
    useEffect(() => {
        getArticles();
    }, []);

    const handleAddProduct = () => {
        return props.history.push("/admin/article/create");
    }

    return (
        <main className="main-content">
                <div className="cart-area section-space-y-axis-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="coupon-all">
                                                <div className="coupon">
                                                    <button className="button mt-xxs-30" type="submit" onClick={() => handleAddProduct()}>Ajouter un produit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="table-content table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="product_remove">Supprimer</th>
                                                    <th className="cart-product-name">Produits</th>
                                                    <th className="cart-product-name">Description</th>
                                                    <th className="cart-product-name">Stock</th>
                                                    <th className="product-quantity">Modifier un produit</th>
                                                    <th className="product-quantity">Rupture de stock</th>
                                                </tr>
                                            </thead>
                                            {articles.map((value, index) => {
                                                return <ProductDetailAdmin article={value} remove={handleRemoveProduct} key={index} {...props} />
                                            })}
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    )
}

export default IndexProductAdmin;