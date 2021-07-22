import React from 'react'



const Lien = (props)=>{

    return (
        <li>
            <a href={"/Categories/"+props.name}>
              <i className="fa fa-chevron-right" />
               {props.name}<span>({props.count})</span>
            </a>
          </li>
    )
}

export default Lien;