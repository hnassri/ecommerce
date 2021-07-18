import { Button } from 'bootstrap';
import React from 'react';
import ButtonPagination from './ButtonPagination';



const Pagination = (props)=>{
    
   
     const value = []
        for (let index = 1; index < props.nbrPage; index++) {
            
            value [index] = <ButtonPagination
            pageNumber={props.index}
                  

            />
            
        } console.log(value);


   const but = value.map(item=>{
        return
      })

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