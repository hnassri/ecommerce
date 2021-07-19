import React, { Component ,useState} from "react"
import CollectionCatusCss from './CollectionCatus.css'
import SecondCollection from './SecondCollection/SecondCollection'

const CollectionCatus = props =>{

    return(
        <div>

       <SecondCollection 
       collection="moi"
       titre="title"
       image="/assets/images/banner/2-3-570x235.jpg"
       />
       <SecondCollection 
       collection="essaye"
       titre="titre"
       image="/assets/images/banner/2-3-570x235.jpg"
       />
       </div>
  
       
    )

} 

export default CollectionCatus;