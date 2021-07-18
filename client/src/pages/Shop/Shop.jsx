import React from 'react'
import CartArticle from '../../components/CartArticle/CartArticle';
import Pagination from '../../components/Pagination/Pagination';
import PreferenceAffichage from '../../components/Shop/PreferenceAffichage/PreferenceAffichage';
import SearchBox from '../../components/Shop/SearchBox/SearchBox';
import Categories from '../../components/Shop/SlideBar/Categories/Catgefories';



const Shop = () => {
  return (
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
                  <CartArticle
                    image="assets/images/product/medium-size/1-7-270x300.jpg"
                    name="nom du produit"
                    prix="30"
                  />
                </div>
              </div>
              {/*    <div className="tab-pane fade" id="list-view" role="tabpanel" aria-labelledby="list-view-tab">
                <div className="product-list-view row g-y-30">
                   ici les etquette large mettre en place un systeme de state pour changer le nom de la classe grid-view ou list-view
                </div>
              </div> */}
            </div>

            <Pagination />
          </div>



        </div>
      </div>
    </div>

  )
}

export default Shop;