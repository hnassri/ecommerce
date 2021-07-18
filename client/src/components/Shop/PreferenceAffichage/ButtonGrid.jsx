import React from 'react';



const ButtonGrid = ()=>{
    return(
        <li className="grid-view" role="presentation">
        <a className="active" id="grid-view-tab" data-bs-toggle="tab" href="#grid-view" role="tab" aria-selected="true">
          <i className="fa fa-th" />
        </a>
      </li>
    )
}

export default ButtonGrid;