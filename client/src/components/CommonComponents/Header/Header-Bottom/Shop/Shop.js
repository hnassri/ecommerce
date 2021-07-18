import React, { Component ,useState} from "react"
import ShopCss from './Shop.css'

const Shop = props =>{

    return(
        <li className="megamenu-holder">
    <a href="shop.html">Shop</a>
    <ul className="drop-menu megamenu">
        <li>
        <span className="title">Shop Layout</span>
        <ul>
          <li>
            <a href="shop.html">Shop Default</a>
          </li>
          <li>
            <a href="shop-grid-fullwidth.html">Shop Grid Fullwidth</a>
          </li>
          <li>
            <a href="shop-right-sidebar.html">Shop Right Sidebar</a>
          </li>
          <li>
            <a href="shop-list-fullwidth.html">Shop List Fullwidth</a>
          </li>
          <li>
            <a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a>
          </li>
          <li>
            <a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a>
          </li>
        </ul>
      </li>
       <li>
       <span className="title">Product Style</span>
       <ul>
         <li>
           <a href="single-product-variable.html">Single Product Variable</a>
         </li>
         <li>
           <a href="single-product-group.html">Single Product Group</a>
         </li>
         <li>
           <a href="single-product.html">Single Product Default</a>
         </li>
         <li>
           <a href="single-product-affiliate.html">Single Product Affiliate</a>
         </li>
         <li>
           <a href="single-product-sale.html">Single Product Sale</a>
         </li>
         <li>
           <a href="single-product-sticky.html">Single Product Sticky</a>
         </li>
       </ul>
     </li>
     <li>
       <span className="title">Product Related</span>
       <ul>
         <li>
           <a href="my-account.html">My Account</a>
         </li>
         <li>
           <a href="login-register.html">Login | Register</a>
         </li>
         <li>
           <a href="cart.html">Shopping Cart</a>
         </li>
         <li>
           <a href="wishlist.html">Wishlist</a>
         </li>
         <li>
           <a href="compare.html">Compare</a>
         </li>
         <li>
           <a href="checkout.html">Checkout</a>
         </li>
       </ul>
     </li> 
    </ul>
</li>

    )

} 

export default Shop;