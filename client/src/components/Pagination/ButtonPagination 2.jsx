import React from 'react';



const ButtonPagination = (props)=>{
    /* className="page-item active"> 
     a mettre en place 
    */


    return(
           
     <li className="page-item "><a className="page-link" href={props.Lienpage}>{props.pageNumber}</a></li>
          

    )
}

export default ButtonPagination;