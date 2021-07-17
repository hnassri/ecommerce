import React, { Component ,useState} from "react"
import CollectionCss from './Collection.css'
import NewCollection from './NewCollection/NewCollection'
import CollectionCatus from './CollectionCatus/CollectionCatus'
const Collection = props =>{

    return(
        <div className="banner-area banner-style-2 section-space-top-100">
        <div className="container">
          <div className="row g-y-30">
            <div className="col-md-6">
              <NewCollection
              collection="new collection"
              technology="new technologie"
              image="assets/images/banner/2-1-570x500.jpg"/>
            </div>
            <div className="col-md-6">
              <div className="banner-wrap row g-y-30">
                <div className="col-12">
                <CollectionCatus/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )

} 

export default Collection;