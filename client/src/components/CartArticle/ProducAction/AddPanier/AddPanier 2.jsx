import React from 'react';



const AddPanier = ()=>{
    return(
        <li>
        <a href="cart.html" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder">
          <i className="pe-7s-cart" />
        </a>
      </li>
    )
}

export default AddPanier;