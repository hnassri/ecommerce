import React, { useState,useEffect } from 'react'

import Pagination from '../../components/Pagination/Pagination';
import PreferenceAffichage from '../../components/Shop/PreferenceAffichage/PreferenceAffichage';
import SearchBox from '../../components/Shop/SearchBox/SearchBox';
import Categories from '../../components/Shop/SlideBar/Categories/Catgefories';
import Header from '../../components/CommonComponents/Header/Header';
import Footer from '../../components/CommonComponents/Footer/index';
import CartArticle from '../../components/CartArticle/CartArticle';
import axios from "axios"

const Shop = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("token");
    const api = 'http://127.0.0.1:8000/article'; 
    const token = user;
    axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} })
    .then(res => {
      setData(
        <div className="users">
          {res.data.items.map((user) => (
             <CartArticle
                image="assets/images/product/medium-size/1-7-270x300.jpg" //{data.image} pour l'instant on garde l'image par default
                name={user.name}
                prix={data.price}
           />
          ))}
        </div>
      );
    })
    .catch((error) => {
      console.log(error)
    });
  },[]);



  return (
    <div className="main-wrapper">
      <Header/>
      <div className="shop-area section-space-y-axis-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 order-2 order-lg-1 pt-5 pt-lg-0">
              <div className="sidebar-area">
                <SearchBox />
                <div className="widgets-area">
                  <Categories />
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 order-1 order-lg-2">
              <PreferenceAffichage />
              <div className="tab-content">
                <div className="tab-pane fade show active" id="grid-view" role="tabpanel" aria-labelledby="grid-view-tab">
                  <div className="product-grid-view row g-y-30">
                {data}
                  </div>
                </div>
                {/*    <div className="tab-pane fade" id="list-view" role="tabpanel" aria-labelledby="list-view-tab">
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