import React ,{useState}from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/auth";
import { useCart } from "react-use-cart";

const Navbar = (props) => {
    const { user, logout } = useAuth();
    const { cartTotal, totalUniqueItems } = useCart();

    return (
        <header className="main-header-area">
        {/* Navbar */}
        {/* Fixed Navbar */}
            <div className="header-middle py-30">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="header-middle-wrap position-relative">
                                <Link to="/" className="header-logo mx-auto d-block">
                                    <img src="/assets/images/logo/dark.png" alt="Header Logo"/>
                                </Link>
                                <div className="header-right">
                                    <ul>
                                        <li className="dropdown d-none d-lg-block">
                                            <button className="btn btn-link dropdown-toggle ht-btn p-0" type="button" id="settingButton" data-bs-toggle="dropdown" aria-label="setting" aria-expanded="false">
                                                <i className="pe-7s-users"></i>
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="settingButton">
                                                
                                                {
                                                    user ?
                                                        <>
                                                            {user.role.includes("ROLE_ADMIN") ? 
                                                                <li><Link to="/admin" className="dropdown-item">Administration</Link></li>
                                                            : 
                                                                null
                                                            }
                                                            <li><Link to="/my-account" className="dropdown-item">Mon Compte</Link></li>
                                                            <li><Link to="/" onClick={() => logout()} className="dropdown-item">Se Déconnecter</Link></li>
                                                        </> :
                                                        <>
                                                            <li><Link to="/login" className="dropdown-item">Se Connecter</Link></li>
                                                            <li><Link to="/register" className="dropdown-item">S'inscrire</Link></li>
                                                        </>
                                                }
                                            </ul>
                                        </li>
                                        <li className="minicart-wrap me-3 me-lg-0">
                                            <Link to="/cart" className="minicart-btn toolbar-btn">
                                                <div>
                                                    <i className="pe-7s-shopbag"></i>
                                                    <span className="quantity">{totalUniqueItems}</span>
                                                </div>
                                            </Link>
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
            
            {/* Fixed Navbar End */}



            {/* Scroll Navbar */}  
            <div className="header-sticky py-4 py-lg-0">
                <div className="container">
                    <div className="header-nav position-relative">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-6">
                                <Link to="/" className="header-logo">
                                    <img src="assets/images/logo/dark.png" alt="Header Logo"/>
                                </Link>
                            </div>
                            <div className="col-lg-6 d-none d-lg-block">
                                
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="header-right">
                                    <ul>
                                        <li className="dropdown d-none d-lg-block">
                                            <button className="btn btn-link dropdown-toggle ht-btn p-0" type="button" id="stickysettingButton" data-bs-toggle="dropdown" aria-label="setting" aria-expanded="false">
                                                <i className="pe-7s-users"></i>
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="stickysettingButton">
                                                {
                                                    user ?
                                                        <>
                                                            { user.role.includes("ROLE_ADMIN") ? 
                                                                <li><Link to="/admin"  className="dropdown-item">Administration</Link></li>
                                                            : 
                                                                null
                                                            }
                                                            <li><Link to="/my-account" className="dropdown-item">Mon Compte</Link></li>
                                                            <li><Link to="/" onClick={() => logout()} className="dropdown-item">Se Déconnecter</Link></li>
                                                        </> :
                                                        <>
                                                            <li><Link to="/login" className="dropdown-item">Se Connecter</Link></li>
                                                            <li><Link to="/register" className="dropdown-item">S'inscrire</Link></li>
                                                        </>
                                                }
                                            </ul>
                                        </li>
                                        <li className="minicart-wrap me-3 me-lg-0">
                                            <Link to="/cart" className="minicart-btn toolbar-btn">
                                                <i className="pe-7s-shopbag"></i>
                                                <span className="quantity">{totalUniqueItems}</span>
                                            </Link>
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
            {/* Scroll Navbar End */}  

            {/* Mobile Navbar */}  
            {/*<div className="mobile-menu_wrapper" id="mobileMenu">
                <div className="offcanvas-body">
                    <div className="inner-body">
                        <div className="offcanvas-top">
                            <a href="#" className="button-close"><i className="pe-7s-close"></i></a>
                        </div>
                        <div className="offcanvas-user-info">
                            <ul className="dropdown-wrap justify-content-center">
                                <li className="dropdown">
                                    <button className="btn btn-link dropdown-toggle ht-btn p-0" type="button" id="settingButtonTwo" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="pe-7s-users"></i>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu" aria-labelledby="settingButtonTwo">
                                        <li><a className="dropdown-item" href="#">Mon Compte</a></li>
                                        <li><a className="dropdown-item" href="#">Administration</a></li>
                                        <li><a className="dropdown-item" href="#">Se Connecter</a></li>
                                        <li><a className="dropdown-item" href="#">S'inscrire</a></li>
                                        <li><a className="dropdown-item" href="#">Se Déconnecter</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="offcanvas-menu_area text-center">
                            <nav className="offcanvas-navigation">
                                <ul className="mobile-menu">
                                    <li><a href="#">Lien</a></li>
                                    <li><a href="#">Lien</a></li>
                                    <li><a href="#">Lien</a></li>
                                    <li><a href="#">Lien</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>*/}
            {/* Mobile Navbar End */} 
            {/* Navbar End */}
            {/* Cart overlay */}
            {/*<div className="offcanvas-minicart_wrapper" id="miniCart">
                <div className="offcanvas-body">
                    <div className="minicart-content">
                        <div className="minicart-heading">
                            <h4 className="mb-0">Panier</h4>
                            <a href="#" className="button-close"><i className="pe-7s-close" data-tippy="Fermer" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder"></i></a>
                        </div>
                        <ul className="minicart-list">
                            <li className="minicart-product">
                                <a className="product-item_remove" href="#"><i className="pe-7s-close" data-tippy="Supprimer" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder"></i></a>
                                <div className="product-item_content">
                                    <a className="product-item_title" href="single-product-variable.html">Nom produit</a>
                                    <span className="product-item_quantity">(Quantité) - (Prix)</span>
                                </div>
                            </li>
                            </ul>
                        </div>
                        <div className="minicart-item_total">
                            <span>Prix Total</span>
                            <span className="ammount">(Prix)</span>
                        </div>
                        <div className="group-btn_wrap d-grid gap-2">
                            <a href="cart.html" className="btn btn-dark">Voir le Panier</a>
                        </div>
                    </div>
                </div>
            <div className="global-overlay"></div>*/}
            {/* Cart overlay End */}
        </header>
    )
}

export default Navbar;