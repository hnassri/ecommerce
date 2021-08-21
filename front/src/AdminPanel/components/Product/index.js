import React, { useEffect,useState } from "react";
import { Link } from 'react-router-dom';
import axios from '../../../axios/axios';
import { useAuth } from "../../../context/auth";
import ProductDetailAdmin from '../Product/ProductDetailAdmin'

const Product = (props) => {
    const { token } = useAuth();
    const [stock, setStock] = useState("");
    const [isInStock, setisInStock] = useState(false);
    const [articles, setArticles] = useState([]);
    const getArticles = () => {
        axios.get("/article")
        .then(res => {
            if(res.data.success === true){
                setArticles(res.data.items);
            }
        })
        .catch(e => {
            if(e.response !== undefined){
                if(e.response.data.success === false){
                    console.log(e.response.data.message);
                }
            }else{
                console.log("An error occured");
            }   
        })
    }
    const handleRemoveProduct = (id) => {
        const header = {
            "Content-Type": "multipart/form-data",
            "Authorization" : `Bearer ${token}`
        };
        axios.delete("/article/" + id, {headers: header})
        .then(res => {
            const data = res.data;
            if(data.success === true){
                getArticles();
                alert("Vous venez d'effacer un article");
            }else{
                console.log("Une erreur est survenue");
            }
        })
    }

    useEffect(() => {
        getArticles();
    }, []);

   


    return(
      <div className="tab-pane fade" id="account-orders" role="tabpanel" aria-labelledby="account-orders-tab">
            <div className="p-4">
                <h2 className="widgets-title mb-4">Produits</h2>
                <div className="widgets-searchbox">
                    <form id="widgets-searchbox">
                        <input className="input-field" type="text" placeholder="Rechercher" />
                        <button className="widgets-searchbox-btn" type="submit">
                        <i className="fa fa-search" />
                        </button>
                    </form>
                </div>
                <div className="product-topbar">
                <ul>
                    <li className="short">
                        <select className="nice-select" style={{display: 'none'}}>
                            <option value="#">Toutes catégories</option>
                        </select>
                    </li>
                    <li className="short">
                        <select className="nice-select" style={{display: 'none'}}>
                            <option value={1}>Trier par nom (A-Z)</option>
                            <option value={2}>Trier par nom (Z-A)</option>
                            <option value={3}>Trier par prix ↑</option>
                            <option value={4}>Trier par prix ↓</option>
                        </select>
                    </li>
                    <li className="short">
                        <Link to="/admin/create/product">CREER UN PRODUIT</Link>
                    </li>
                </ul>
                </div>
            </div>
            <div className="cart-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form>
                                <div className="table-content table-responsive">
                                 
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th className="cart-product-name">Nom</th>
                                            <th className="product-price">Status</th>
                                            <th className="product-quantity">Changement Stock</th>
                                            <th className="product-subtotal">Prix</th>
                                            <th className="product_remove">Supprimer</th>
                                        </tr>
                                        </thead>
                                        {articles.map((value, index) => {
                                                return <ProductDetailAdmin article={value} remove={handleRemoveProduct} key={index} {...props} />
                                            })}
                                    </table>
                                 
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product;