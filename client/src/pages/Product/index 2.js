import React from 'react';
import Detaill from '../../components/ProductDetaill';
import Header from '../../components/CommonComponents/Header/Header';
import Footer from '../../components/CommonComponents/Footer/index';
const Product = (props) => {

  return (
    <div class="main-wrapper">
      <Header/>
      <main className="main-content">
        <Detaill
          descption="ici la description bala bla blablablbalalbablablalabablalbaabl"
          id="1"
          prix='30'
          name ='hehe'
        />
      </main>
      <Footer/>
   </div>
  )
}

export default Product;