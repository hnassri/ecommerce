import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
    return (
        <div className="main-content">
            <div className="breadcrumb-area breadcrumb-height breadcrumb-bg">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-12">
                            <div className="breadcrumb-item">
                                <h2 className="breadcrumb-heading">{props.name}</h2>
                                <ul>
                                    <li>
                                        <Link to="/" >Accueil</Link>
                                    </li>
                                    <li>{props.name}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumb;