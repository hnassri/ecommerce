import React from "react";
import './style.css';

const SliderHome =()=>{

    return(
<div className="slider-area">
  <div className="swiper-container main-slider-2 swiper-arrow with-bg_white">
    <div className="swiper-wrapper">
      <div className="swiper-slide animation-style-02">
        <div className="slide-inner style-2" data-bg-image="assets/images/slider/bg/2-1.jpg">
          <div className="slide-content text-black">
            <h2 className="title">New <br /> Product</h2>
            <p className="short-desc">WebShop, New technology, Numeric Shop.</p>
            <div className="btn-wrap">
              <a className="btn btn-custom-size xl-size btn-webshop-primary" href="shop.html">Discover Now</a>
            </div>
          </div>
          <div className="slide-img">
            <img src="assets/images/slider/slide-img/2-1-960x741.jpg" alt="Slide Image" />
            <div className="slide-count">
              <span className="data-count" data-count="0">
                <span className="forward-slash">/</span>
                <span>03</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide animation-style-02">
        <div className="slide-inner style-2" data-bg-image="assets/images/slider/bg/2-1.jpg">
          <div className="slide-content text-black">
            <h2 className="title">New <br /> Product</h2>
            <p className="short-desc">WebShop, New technology, Numeric Shop.</p>
            <div className="btn-wrap">
              <a className="btn btn-custom-size xl-size btn-webshop-primary" href="shop.html">Discover Now</a>
            </div>
          </div>
          <div className="slide-img">
            <img src="assets/images/slider/slide-img/2-2-960x741.jpg" alt="Slide Image" />
            <div className="slide-count">
              <span className="data-count" data-count="2">
                <span className="forward-slash">/</span>
                <span>03</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide animation-style-02">
        <div className="slide-inner style-2" data-bg-image="assets/images/slider/bg/2-1.jpg">
          <div className="slide-content text-black">
            <h2 className="title">New <br /> Product</h2>
            <p className="short-desc">WebShop, New technology, Numeric Shop.</p>
            <div className="btn-wrap">
              <a className="btn btn-custom-size xl-size btn-webshop-primary" href="shop.html">Discover Now</a>
            </div>
          </div>
          <div className="slide-img">
            <img src="assets/images/slider/slide-img/2-3-960x741.jpg" alt="Slide Image" />
            <div className="slide-count">
              <span className="data-count" data-count="3">
                <span className="forward-slash">/</span>
                <span>03</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="slide-button-wrap">
      <div className="slide-button-prev">
        <i className="pe-7s-angle-left" />
      </div>
      <div className="slide-button-next">
        <i className="pe-7s-angle-right" />
      </div>
    </div>
  </div>
</div>

    
    )
}
export default SliderHome;