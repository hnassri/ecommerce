import React, { Component ,useState} from "react"
import './video.css';
const Video =props =>{
return(
   <div className="banner-with-counter">
  <div className="banner-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="banner-boxshadow">
            <div className="banner-item" data-bg-image="assets/images/banner/3-1-1208x542.jpg">
              <div className="popup-btn">
                <a className="popup-vimeo wave-btn" href={props.video}>
                  <span />
                  <span />
                  <span />
                  <div className="icon">
                    <i className="pe-7s-play" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="counter-area">
    <div className="container">
      <h2 className="counter-title">{props.title}
      </h2>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-6">
          <div className="counter-item">
            <div className="count-wrap">
              <h3 className="count mb-0" data-counterup-time={500}>150</h3>
              <span className="prefix">+</span>
            </div>
            <h4 className="count-title mb-0">Projects</h4>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-6">
          <div className="counter-item">
            <div className="count-wrap">
              <h3 className="count mb-0" data-counterup-time={1000}>359</h3>
              <span className="prefix">+</span>
            </div>
            <h4 className="count-title mb-0">Clients</h4>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-6 pt-4 pt-md-0">
          <div className="counter-item">
            <div className="count-wrap">
              <h3 className="count mb-0" data-counterup-time={1500}>251</h3>
              <span className="prefix">+</span>
            </div>
            <h4 className="count-title mb-0">Rating</h4>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-6 pt-4 pt-lg-0">
          <div className="counter-item">
            <div className="count-wrap">
              <h3 className="count mb-0" data-counterup-time={2000}>110</h3>
              <span className="prefix">+</span>
            </div>
            <h4 className="count-title mb-0">Award</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

)
}
export default Video