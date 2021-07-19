import React, { Component ,useState} from "react"
import PanierCss from './Panier.css'

const PanierCount = props =>{

    return(
 <div>
  <li classname="minicart-wrap me-3 me-lg-0">
    <a href="#" classname="minicart-btn toolbar-btn">
      <i classname="pe-7s-shopbag" />
      <span classname="quantity">3</span>
    </a>
  </li>
  <li className="mobile-menu_wrap d-block d-lg-none">
      <a href="#" className="mobile-menu_btn toolbar-btn pl-0">
          <i className="pe-7s-menu"></i>
      </a>
  </li>

  </div>

    )

} 

export default PanierCount;