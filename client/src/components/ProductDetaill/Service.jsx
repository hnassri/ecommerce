import React from 'react'


const Service= (props)=>{



    return(
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
    )
}

export default Service ;