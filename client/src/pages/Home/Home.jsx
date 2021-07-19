import '../../App.css'
import React, { Component, useState } from "react"
import SliderHome from '../../components/Home/SliderHome/SlideHome'
import Header from '../../components/CommonComponents/Header/Header'
import Collection from '../../components/Home/Collection/Collection'
import Video from '../../components/Home/Video/Video'
import CartArticle from '../../components/CartArticle/CartArticle'



const Home = props => {
    return (
        <div class="main-wrapper">
            <Header />
            <SliderHome />
            <Collection/>
            <div className="product-area section-space-top-100 section-space-bottom-90">
                <div className="container">
                    <div className="section-title-wrap">
                        <h2 className="section-title mb-0">NOS PRODUITS</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="nav product-tab-nav tab-style-1" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className="active" id="featured-tab" data-bs-toggle="tab" href="#featured" role="tab" aria-controls="featured" aria-selected="true">
                                        En vedette
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a id="bestseller-tab" data-bs-toggle="tab" href="#bestseller" role="tab" aria-controls="bestseller" aria-selected="false">
                                        les mieux vendu
                                    </a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a id="latest-tab" data-bs-toggle="tab" href="#latest" role="tab" aria-controls="latest" aria-selected="false">
                                        Les dernier ajouter
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="product-item-wrap row">
                                    {/* premier ligne */}

                                    <CartArticle
                                    image="/assets/images/product/medium-size/1-7-270x300.jpg"
                                    name="nom du produit"
                                    prix="30"
                                    />
                                     <CartArticle 
                                    image="/assets/images/product/medium-size/1-7-270x300.jpg"
                                    name="nom du produit"
                                    prix="30"
                                    />
                                     <CartArticle 
                                    image="/assets/images/product/medium-size/1-7-270x300.jpg"
                                    name="nom du produit"
                                    prix="30"
                                    />
                                     <CartArticle 
                                    image="/assets/images/product/medium-size/1-7-270x300.jpg"
                                    name="nom du produit"
                                    prix="30"
                                    />
                                     <CartArticle 
                                    image="/assets/images/product/medium-size/1-7-270x300.jpg"
                                    name="nom du produit"
                                    prix="30"
                                    />
                                     <CartArticle 
                                    image="/assets/images/product/medium-size/1-7-270x300.jpg"
                                    name="nom du produit"
                                    prix="30"
                                    />
                                     <CartArticle 
                                    image="/assets/images/product/medium-size/1-7-270x300.jpg"
                                    name="nom du produit"
                                    prix="30"
                                    />
                                     <CartArticle 
                                    image="/assets/images/product/medium-size/1-7-270x300.jpg"
                                    name="nom du produit"
                                    prix="30"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Video/>
        </div>
       
    )
}

export default Home