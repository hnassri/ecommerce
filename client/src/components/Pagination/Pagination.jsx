import { Button } from 'bootstrap';
import React from 'react';
import ButtonPagination from './ButtonPagination';



const Pagination = (props)=>{
    
  /*   const Lien = ()=>{
        for (let index = 1; index < props.nbrPage; index++) {
            
            <ButtonPagination
            pageNumber={props.index}
                   {props.page}

            />
            
        } */
    

    return(
           
          <div className="pagination-area">
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
            <ButtonPagination
            pageNumber={"1"}
            Lienpage={"#"}

            />
              <ButtonPagination
            pageNumber={"2"}
            Lienpage={"#"}
                   
            />
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">»</a>
              </li>
            </ul>
          </nav>
        </div>
    )
}

export default Pagination;