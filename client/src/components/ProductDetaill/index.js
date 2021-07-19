import React from 'react';
import ImageProduct from './ImageProduct/ImageProduct';
import Option from './Option';
import EtoileCart from '../CartArticle/ProducAction/EtoileCart';
import EnsembleCategories from './EnsembleCategories';
import EnsembleTag from './EnsembleTag';
import Service from './Service';

const Detaill = (props) => {
  const  image ='http://206.81.25.252:8000'+props.image[0].url
  return (

    <div className="single-product-area section-space-top-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <ImageProduct
              source={image}
            />
          </div>
          <div className="col-lg-6 pt-5 pt-lg-0">
            <div className="single-product-content">
              <h2 className="title">{props.name}</h2>
              <div className="price-box">
                <span className="new-price">{props.prix}€</span>
              </div>
              <div className="rating-box-wrap">
                <EtoileCart />
                <div className="review-status">
                  <a href="#">( 1 Vue )</a>
                </div>
              </div>
              <Option />

              <p className="short-desc">{props.descption}</p>
              <ul className="quantity-with-btn">
                <li className="quantity">
                  <div className="cart-plus-minus">
                    <input className="cart-plus-minus-box" defaultValue={1} type="text" />
                  </div>
                </li>
                <li className="add-to-cart">
                  <a className="btn btn-custom-size lg-size btn-webshop-primary" href="cart.html">Add to
                    cart</a>
                </li>
                <li className="wishlist-btn-wrap">
                  <a className="custom-circle-btn" href="wishlist.html">
                    <i className="pe-7s-like" />
                  </a>
                </li>
              </ul>
              <Service/>
              <EnsembleCategories />

              <EnsembleTag />

            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
export default Detaill;