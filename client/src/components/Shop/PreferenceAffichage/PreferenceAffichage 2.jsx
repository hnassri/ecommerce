import React from 'react';
import ButtonGrid from './ButtonGrid';
import ButtonList from './ButtonList';



const PreferenceAffichage = ()=>{
    return(
        <div className="product-topbar">
        <ul>
          <li className="page-count">
            <span></span> Produit trouver <span>30</span>
          </li>
          <li className="product-view-wrap">
            <ul className="nav" role="tablist">
              <ButtonGrid/>
              <ButtonList/>
            </ul>
          </li>
          <li className="short">
            <select className="nice-select">
              <option value={1}>Sort by Default</option>
              <option value={2}>Sort by Popularity</option>
              <option value={3}>Sort by Rated</option>
              <option value={4}>Sort by Latest</option>
              <option value={5}>Sort by High Price</option>
              <option value={6}>Sort by Low Price</option>
            </select>
          </li>
        </ul>
      </div>
    )
}

export default PreferenceAffichage;