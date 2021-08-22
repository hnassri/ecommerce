import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useCart } from "react-use-cart";
import axios from "../../../axios/axios";

const ProductShow = (props) => {

    const { addItem }= useCart();
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();

    const getArticle = (id) => {
        axios.get("/article/" + id)
        .then(res => {
            console.log(res)
            if(res.data.success === true){
                setArticle(res.data.item[0]);
                if(res.data.item[0].images[0]){
                    setImage("http://localhost:8000" + res.data.item[0].images[0].url)
                }
            }else{
                alert("Une erreur est survenue")
            }
        })
    }

    const [article, setArticle] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        getArticle(id);
    }, [])

    return (

        <div className="single-product-area section-space-top-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="single-product-img">
                            <div className="swiper-container single-product-slider">
                                <div className="swiper-wrapper">
                                    {/*
                                    <div className="swiper-slide">
                                        <a href="assets/images/product/large-size/1-2-570x633.jpg" className="single-img gallery-popup">
                                        <img className="img-full" src="assets/images/product/large-size/1-2-570x633.jpg" alt="Product Image" />
                                        </a>
                                    </div>
                                    <div className="swiper-slide">
                                        <a href="assets/images/product/large-size/1-3-570x633.jpg" className="single-img gallery-popup">
                                        <img className="img-full" src="assets/images/product/large-size/1-3-570x633.jpg" alt="Product Image" />
                                        </a>
                                    </div>
                                    <div className="swiper-slide">
                                        <a href="assets/images/product/large-size/1-4-570x633.jpg" className="single-img gallery-popup">
                                        <img className="img-full" src="assets/images/product/large-size/1-4-570x633.jpg" alt="Product Image" />
                                        </a>
                                    </div>
                                    */}
                                </div>
                            </div>
                            <div className="thumbs-arrow-holder">
                                <div className="swiper-container single-product-thumbs">
                                    <div className="swiper-wrapper">
                                        <span className="swiper-slide">
                                        <img className="img-full"  src={image} alt="Product Thumnail" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pt-5 pt-lg-0">
                        <div className="single-product-content">
                            <h2 className="title">{article.name}</h2>
                            <div className="price-box">
                                <span className="new-price">{article.price}</span>
                            </div>
                            <div className="rating-box-wrap pb-4">
                                <div className="rating-box">
                                <ul>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                </ul>
                                </div>
                                <div className="review-status">
                                <a href="#">( 1 Review )</a>
                                </div>
                            </div>
                            <p className="short-desc">{article.description}</p>
                            <ul className="quantity-with-btn">
                                <li className="quantity">
                                <div className="cart-plus-minus">
                                    <input className="cart-plus-minus-box" value={quantity} type="text" />
                                    <div className="dec qtybutton">
                                        <i className="fa fa-minus" onClick={e => {
                                            if(quantity > 1){
                                                setQuantity(quantity - 1)
                                            }
                                        }} />
                                    </div>
                                    <div className="inc qtybutton">
                                        <i className="fa fa-plus" onClick={e => setQuantity(quantity + 1)} />
                                    </div>
                                </div>
                                </li>
                                <li className="add-to-cart">
                                <button className="btn btn-custom-size lg-size btn-webshop-primary" onClick={e => {
                                    addItem(article, quantity);
                                    alert("Ce produit a bien été ajouter au panier");
                                }}>Ajouter au panier</button>
                                </li>
                            </ul>
                            <ul className="service-item-wrap">
                                <li className="service-item">
                                <div className="service-img">
                                    <img src="/assets/images/shipping/icon/car.png" alt="Shipping Icon" />
                                </div>
                                <div className="service-content">
                                    <span className="title">Fast <br /> Shipping</span>
                                </div>
                                </li>
                                <li className="service-item">
                                <div className="service-img">
                                    <img src="/assets/images/shipping/icon/card.png" alt="Shipping Icon" />
                                </div>
                                <div className="service-content">
                                    <span className="title">Safe <br /> Payment</span>
                                </div>
                                </li>
                            </ul>
                            <div className="product-category">
                                <span className="title">Caractéristiques :</span>
                                    <ul>
                                        <li>
                                            <span>{article.features}</span>
                                        </li>
                                    </ul>
                            </div>
                
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default ProductShow;