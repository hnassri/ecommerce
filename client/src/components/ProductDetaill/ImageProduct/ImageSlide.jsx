import React from 'react';



const ImageSlide = (props) => {

    return (

        <div className="swiper-slide">
            <a href={props.source} className="single-img gallery-popup">
                <img className="img-full" src={props.source} alt="Product Image" />
            </a>
        </div>

    )
}


export default ImageSlide;