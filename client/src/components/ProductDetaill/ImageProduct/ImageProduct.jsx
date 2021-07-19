import React from 'react';



const ImageProduct = (props) => {

    return (
        <div className="single-product-img">
            <div className="swiper-container single-product-slider">
                <div className="swiper-wrapper">
                    {/* un composant ImageSlide est cree pour ajouter les image du slide ps a mettre en place  */}
                    <div className="swiper-slide">
                        <a href="/assets/images/product/large-size/1-4-570x633.jpg" className="single-img gallery-popup">
                            <img className="img-full" src={props.source} alt="Product Image" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default ImageProduct;