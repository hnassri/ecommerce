import React, { Component ,useState} from "react"
import SecondCollectionCss from './SecondCollection.css'

const SecondCollection = props =>{

    return(
        <div className="banner-item img-hover-effect">
        <div className="banner-img">
          <img src={props.image} alt="Banner Image" />
        </div>
        <div className="banner-content text-position-left">
          <span className="collection">{props.collection}</span>
          <h3 className="title">{props.titre}</h3>
          <div className="button-wrap">
            <a className="btn btn-custom-size sm-size btn-webshop-primary" href="shop.html">Shop
              Now</a>
          </div>
        </div>
      </div>
    )

} 

export default SecondCollection;