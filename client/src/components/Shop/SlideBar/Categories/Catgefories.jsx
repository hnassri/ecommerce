import React from 'react'
import Lien from './Lien'



const Categories = ()=>{

    return (
        <div className="widgets-item pt-0">
        <h2 className="widgets-title mb-4">Categories</h2>
        <ul className="widgets-category">
          <Lien
             name="categorie1"
             count="29"
          />
           <Lien
             name="categorie2"
             count="1à"
          />
        </ul>
      </div>
    )
}

export default Categories;