import React from "react";
import { Link } from 'react-router-dom';
import BreadCrumb from "../../components/BreadCrumb";
const Page404 = props => {
    return (
       <div className="main-wrapper">
           <BreadCrumb name="Erreur 404"/>
        
            <div className="error-404-area section-space-y-axis-100">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-12 align-self-center">
                            <div className="error-404-content">
                                <div className="error-404-img">
                                    <img src="assets/images/error-404/404.png" alt="Error 404"/>
                                </div>
                                <h2 className="title"><span>Oops,</span> page non trouvé!</h2>
                                <div className="button-wrap">
                                    <Link to="/" className="btn btn-light btn-outline-dark">Retourner à l'acceuil
                                        <i className="pe-7s-home"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page404;