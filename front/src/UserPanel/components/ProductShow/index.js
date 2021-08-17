import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "../../../axios/axios";

const ProductShow = (props) => {

   const article = props.article;

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
                                        <a href="#" className="swiper-slide">
                                        <img className="img-full"  src={"http://localhost:8000" + article.images} alt="Product Thumnail" />
                                        </a>

                                    </div>
                                    {/* Add Arrows */}
                                    <div className=" thumbs-button-wrap d-none d-md-block">
                                        <div className="thumbs-button-prev">
                                        <i className="pe-7s-angle-left" />
                                        </div>
                                        <div className="thumbs-button-next">
                                        <i className="pe-7s-angle-right" />
                                        </div>
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
                                <li className="compare-btn-wrap">
                                <a className="custom-circle-btn" href="compare.html">
                                    <i className="pe-7s-refresh-2" />
                                </a>
                                </li>
                            </ul>
                            <ul className="service-item-wrap">
                                <li className="service-item">
                                <div className="service-img">
                                    <img src="/assets/images/shipping/icon/car.png" alt="Shipping Icon" />
                                </div>
                                <div className="service-content">
                                    <span className="title">Free <br /> Shipping</span>
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
                                <li className="service-item">
                                <div className="service-img">
                                    <img src="/assets/images/shipping/icon/service.png" alt="Shipping Icon" />
                                </div>
                                <div className="service-content">
                                    <span className="title">Safe <br /> Payment</span>
                                </div>
                                </li>
                            </ul>
                            <div className="product-category">
                                <span className="title">Caracteristiques :</span>
                                    <ul>
                                        <li>
                                            <a href="#">{article.features}</a>
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