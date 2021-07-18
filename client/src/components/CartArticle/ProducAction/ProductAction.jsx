import React from "react";
import AddPanier from "./AddPanier/AddPanier";
import Quickview from "./QuickView/QuickView";
import WishList from "./Wishlist/WishList";




const ProductAction = ()=>{
    
    return(
        <div className="product-add-action">
        <ul>
         <WishList/>
         <Quickview/>
         <AddPanier/>
        </ul>
      </div>
    )
}

export default ProductAction ;