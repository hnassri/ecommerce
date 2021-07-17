import React, { Component ,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Phone from './Phone/Phone'
import Logo from './LogoCentre/Logo'
import HeaderCss from './Header.css'
const Header=props=>{

return(
    
<div className="header-middle py-30">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="header-middle-wrap position-relative ">
                         <Phone/>
                        <Logo/>

                        <div className="header-right">
                            <ul>
                                <li>
                                    <a href="#exampleModal" className="search-btn bt" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <i className="pe-7s-search"></i>
                                    </a>
                                </li>
                                <li className="dropdown d-none d-lg-block">
                                    <button className="btn btn-link dropdown-toggle ht-btn p-0" type="button" id="settingButton" data-bs-toggle="dropdown" aria-label="setting" aria-expanded="false">
                                        <i className="pe-7s-users"></i>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="settingButton">
                                        <li><a className="dropdown-item" href="my-account.html">My account</a></li>
                                        <li><a className="dropdown-item" href="login-register.html">Login | Register</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="d-none d-lg-block">
                                    <a href="wishlist.html">
                                        <i className="pe-7s-like"></i>
                                    </a>
                                </li>
                                <li className="minicart-wrap me-3 me-lg-0">
                                    <a href="#miniCart" className="minicart-btn toolbar-btn">
                                        <i className="pe-7s-shopbag"></i>
                                        <span className="quantity">3</span>
                                    </a>
                                </li>
                                <li className="mobile-menu_wrap d-block d-lg-none">
                                    <a href="#mobileMenu" className="mobile-menu_btn toolbar-btn pl-0">
                                        <i className="pe-7s-menu"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
</div>
      )
    }
export default Header