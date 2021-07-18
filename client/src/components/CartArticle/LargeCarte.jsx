import React from 'react';
import EtoileCart from './ProducAction/EtoileCart';
import ProductAction from './ProducAction/ProductAction';


const LargeCarte = (props) => {


    return (

        <div className="col-12">
            <div className="product-item">
                <div className="product-img">
                    <a href="single-product-variable.html">
                        <img className="primary-img" src={props.image} alt="Product Images" />
                    </a>
                </div>
                <div className="product-content">
                    <a className="product-name" href="single-product-variable.html">{props.name}</a>
                    <div className="price-box pb-1">
                        <span className="new-price">{props.prix}</span>
                    </div>
                    <EtoileCart />
                    <p className="short-desc mb-0">{props.description}</p>
                    <ProductAction/>
                </div>
            </div>
        </div>

    )
}
export default LargeCarte;