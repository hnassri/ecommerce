import React from 'react';
import ProductAction from './ProducAction/ProductAction';


const CartArticle = (props) => {
  
  
  return (

    <div className="col-xl-3 col-md-4 col-sm-6">
      <div className="product-item">
        <div className="product-img">
          <a href={"/product/article/"+props.id}>
            <img className="primary-img" src={props.image} alt="Product Images" />
          </a>
          <ProductAction />
        </div>
        <div className="product-content">
          <a className="product-name" href="shop.html">{props.name}</a>
          <div className="price-box pb-1">
            <span className="new-price">{props.prix}€</span>
          </div>
          <div className="rating-box">
            <ul>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
              <li><i className="fa fa-star" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  )
}
export default CartArticle