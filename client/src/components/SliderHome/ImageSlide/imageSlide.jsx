import React from 'react';


const ImageSlide = (props)=>{

    return(
        <div className="swiper-slide animation-style-02">
        <div className="slide-inner style-2" data-bg-image={props.bgImage}>
          <div className="slide-content text-black">
            <h2 className="title">{props.title}</h2>
            <p className="short-desc">{props.shortDesc}</p>
            <div className="btn-wrap">
              <a className="btn btn-custom-size xl-size btn-webshop-primary" href="shop.html">Discover Now</a>
            </div>
          </div>
          <div className="slide-img">
            <img src={props.imageSlide} alt="Slide Image" />
            <div className="slide-count">
              <span className="data-count" data-count={props.datacount}>
                <span className="forward-slash">/</span>
                <span>{props.nbrimage}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ImageSlide;