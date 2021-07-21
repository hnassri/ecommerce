<<<<<<< HEAD
import React, {useState,useEffect } from 'react'
=======
import React, { useState,useEffect } from 'react'

>>>>>>> ac777bea2e8f58ee05e15bdbdd1018373c25de73
import Pagination from '../../components/Pagination/Pagination';
import PreferenceAffichage from '../../components/Shop/PreferenceAffichage/PreferenceAffichage';
import SearchBox from '../../components/Shop/SearchBox/SearchBox';
import Categories from '../../components/Shop/SlideBar/Categories/Catgefories';
import Header from '../../components/CommonComponents/Header/Header';
import Footer from '../../components/CommonComponents/Footer/index';
import CartArticle from '../../components/CartArticle/CartArticle';
import axios from "axios"
import { useAuth } from '../../context/auth';
import { useParams } from 'react-router-dom';


const Shop = () => {

  const [data, setData] = useState("");
  const [nbrArticle, setnbrArticle] = useState(0)


  return (
    <div className="main-wrapper">
      <Header/>
      <div className="shop-area section-space-y-axis-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 order-2 order-lg-1 pt-5 pt-lg-0">
              <div className="sidebar-area">
                <SearchBox data={data} setData={setData} setnbrArticle={setnbrArticle} />
                <div className="widgets-area">
                  <Categories />
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 order-1 order-lg-2">
              <PreferenceAffichage nbrArticle={nbrArticle}/>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="grid-view" role="tabpanel" aria-labelledby="grid-view-tab">
                  <div className="product-grid-view row g-y-30">
                {data}
                
                  </div>
                </div>
                {/*<div className="tab-pane fade" id="list-view" role="tabpanel" aria-labelledby="list-view-tab">
                <div className="product-list-view row g-y-30">
                   ici les etquette large mettre en place un systeme de state pour changer le nom de la classe grid-view ou list-view
                </div>
              </div> */}
              </div>

           
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>

  )
}

export default Shop;