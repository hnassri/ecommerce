import React, { Component ,useState} from "react"
import NewCollectionCss from './NewCollection.css'

const NewCollection = props =>{

    return(
            <div className="banner-item img-hover-effect">
                <div className="banner-img">
                  <img src={props.image} alt="Banner Image" />
                </div>
                <div className="banner-content text-position-center">
                  <span className="collection">{props.collection}</span>
                  <h3 className="title">{props.technology}</h3>
                  <div className="button-wrap">
                    <a className="btn btn-custom-size btn-webshop-primary" href="shop.html">Shop
                      Now</a>
                  </div>
                </div>
              </div>
    )

} 

export default NewCollection;