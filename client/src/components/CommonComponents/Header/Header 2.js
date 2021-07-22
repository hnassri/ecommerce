import React, { Component ,useState} from "react";
import Phone from './Header-top/Phone/Phone'
import Logo from './Header-top/LogoCentre/Logo'
import Search from './Header-top/Search/Search'
import Users from './Header-top/Users/Users'
import Favoris from './Header-top/Favoris/Favoris'
import Panier from './Header-top/Panier/PanierCount'
import HeaderCss from './Header.css'
import Home from './Header-Bottom/Home/Home'
import Shop from './Header-Bottom/Shop/Shop'
import About from './Header-Bottom/About/Aboutus'
import Contact from './Header-Bottom/Contact/Contact'
import Page from './Header-Bottom/Pages/Page'
import 'bootstrap/dist/css/bootstrap.min.css';
const Header=props=>{

return(
<div>
<div className="header-middle py-30">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="header-middle-wrap position-relative ">
                         <Phone/>
                        <Logo/>

                        <div className="header-right">
                            <ul>
                                <Search/>
                                <Users/>
                                <Favoris/>
                               <Panier/>      
                            </ul>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
</div>
 <div className="header-bottom d-none d-lg-block">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="main-menu position-relative">
          <nav className="main-nav">
            <ul>
                <Home/>
                <Shop/>
                <About/>
                <Page/>
                <Contact/>
                
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
      )
    }
export default Header