import React from 'react';


const WishList = ()=>{
    return(
        <li>
        <a href="wishlist.html" data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder">
          <i className="pe-7s-like" />
        </a>
      </li>
    )
}

export default WishList;