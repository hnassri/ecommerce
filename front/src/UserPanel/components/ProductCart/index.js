import React from "react";
import { Link } from "react-router-dom";

const ProductCart = ({article}) => {
    
    return (
        <div className="col-md-4 col-sm-6">
            <div className="product-item">
                <div className="product-img">
                    <Link to={"/article/" + article.id}>
                        <img className="primary-img img-thumbnail" src={"http://localhost:8000" + article.image} alt="Product Images"/>
                    </Link>
                </div>
                <div className="product-content">
                    <Link to={"/article/" + article.id} className="product-name" >{article.name}</Link>
                    <div className="price-box pb-1">
                        <span className="new-price">{article.price}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCart;