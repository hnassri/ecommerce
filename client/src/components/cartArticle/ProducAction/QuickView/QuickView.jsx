import React from 'react';



const Quickview = ()=>{
    return(
        <li className="quuickview-btn" data-bs-toggle="modal" data-bs-target="#quickModal">
        <a href="#" data-tippy="Quickview" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder">
          <i className="pe-7s-look" />
        </a>
      </li>
    )
}

export default Quickview;