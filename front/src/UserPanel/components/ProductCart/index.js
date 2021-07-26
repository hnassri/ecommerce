import React from "react";

const ProductCart = () => {
    return (
        <div class="col-xl-9 col-lg-8 order-1 order-lg-2">
            <div class="tab-content">
                <div class="tab-pane fade show active" id="grid-view" role="tabpanel" aria-labelledby="grid-view-tab">
                    <div class="product-grid-view row g-y-20">
                        <div class="col-md-4 col-sm-6">
                            <div class="product-item">
                                <div class="product-img">
                                    <a href="single-product-variable.html">
                                        <img class="primary-img" src="assets/images/product/medium-size/1-1-270x300.jpg" alt="Product Images"/>
                                        <img class="secondary-img" src="assets/images/product/medium-size/1-2-270x300.jpg" alt="Product Images"/>
                                    </a>
                                    <div class="product-add-action">
                                        <ul>
                                            <li>
                                                <a href="wishlist.html" data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                                    <i class="pe-7s-like"></i>
                                                </a>
                                            </li>
                                            <li class="quuickview-btn" data-bs-toggle="modal" data-bs-target="#quickModal">
                                                <a href="#" data-tippy="Quickview" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                                    <i class="pe-7s-look"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="cart.html" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                                    <i class="pe-7s-cart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="product-content">
                                    <a class="product-name" href="single-product-variable.html">Nom du produit</a>
                                    <div class="price-box pb-1">
                                        <span class="new-price">(Prix)</span>
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

export default ProductCart;