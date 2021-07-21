import React from "react";

const FormArticleUpdate = () => {
    return(
        <main className="main-content">
            <div className="breadcrumb-area breadcrumb-height" data-bg-image="assets/images/breadcrumb/bg/1-1-1919x388.jpg">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-12">
                            <div className="breadcrumb-item">
                                <h2 className="breadcrumb-heading">Single Product</h2>
                                <ul>
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li>Single Product</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-product-area section-space-top-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="single-product-img">
                                <a href="assets/images/product/large-size/1-1-570x633.jpg" className="single-img gallery-popup">
                                    <img className="img-full" src="assets/images/product/large-size/1-1-570x633.jpg" alt="Product Image"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-5 pt-lg-0">
                            <div className="single-product-content">
                                <div className="product-category">
                                    <span className="title">ID:</span>
                                    <ul>
                                        <li>
                                            <a href="#">Product ID</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="price-box">
                                    <span className="new-price">Name of Product</span>
                                    <div>
                                        <input className="cart-plus-minus-box" value="American Marigold" type="text"/>
                                    </div>
                                    <div className="price-box">
                                        <span className="new-price">Price</span>
                                        <div>
                                            <input className="cart-plus-minus-box" value="23.75" type="text"/>
                                        </div>
                                    </div>
                                    <div className="price-box">
                                        <span className="new-price">Description</span>
                                        <div className="input-group">
                                            <textarea className="form-control" aria-label="With textarea"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        En stock
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        En Rupture de Stock
                                        </label>
                                    </div>
                                    <div className="input-group mb-3">
                                        <label className="input-group-text" htmlFor="inputGroupFile01">Add Images</label>
                                        <input type="file" className="form-control" id="inputGroupFile01"/>
                                    </div>
                                    <div className="single-product-content">
                                        <ul className="quantity-with-btn">
                                            <li className="quantity">
                                                <div className="cart-plus-minus">
                                                    <input className="cart-plus-minus-box" value="5" type="text"/>
                                                </div>
                                            </li>
                                            <li className="add-to-cart">
                                                <a className="btn btn-custom-size lg-size btn-webshop-primary" href="cart.html">Save</a>
                                            </li>
                                            <li className="add-to-cart">
                                                <a className="btn btn-custom-size lg-size btn-webshop-primary" href="cart.html">Remove</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default FormArticleUpdate;