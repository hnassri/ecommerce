import React, { Component } from "react";
import App from "../../../App.css";
import NavStyle from "./style.css";

class Navbar extends Component {
    render (){
        return (
<React.Fragment>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
        <a class="navbar-brand" href="#">Ecommerce</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Accueil</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Catégories</a>
            </li>
        </ul>
        <form class="d-flex">
        <input class="form-control me-2" type="search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Rechercher</button>
      </form>
      <button class="btn btn-login btn-outline-success">Se Connecter</button>
    </div></div>
</nav>
</React.Fragment>
        );
    }
}

export default Navbar;