import React from "react";
import './style.css';
import ButtOnSlide from "./ButtonSlide/ButtonSlide";
import ImageSlide from "./ImageSlide/imageSlide";

const SliderHome = () => {

    return (
      <div className="slider-area">
        <div className="swiper-container main-slider-2 swiper-arrow with-bg_white">
          <div className="swiper-wrapper">
            <ImageSlide
              bgImage={"/assets/images/slider/bg/2-1.jpg"}
              title={"New <br/> Product<"}
              shortDesc={"WebShop, New technology, Numeric Shop."}
              imageSlide={"/assets/images/slider/slide-img/2-2-960x741.jpg"}
              datacount={"1"}
              nbrimage={3}
            />
            <ImageSlide
              bgImage={"/assets/images/slider/bg/2-1.jpg"}
              title={"New <br/> Product<"}
              shortDesc={"WebShop, New technology, Numeric Shop."}
              imageSlide={"/assets/images/slider/slide-img/2-2-960x741.jpg"}
              datacount={"2"}
              nbrimage={3}
            />
            <ImageSlide
              bgImage={"/assets/images/slider/bg/2-1.jpg"}
              title={"New <br/> Product<"}
              shortDesc={"WebShop, New technology, Numeric Shop."}
              imageSlide={"/assets/images/slider/slide-img/2-2-960x741.jpg"}
              datacount={"3"}
              nbrimage={3}
            />
          </div>
          <ButtOnSlide />
        </div>

      </div>


    )
  }
  export default SliderHome;