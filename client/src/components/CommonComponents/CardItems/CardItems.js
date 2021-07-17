import React, { Component } from "react";
import App from "../../../App.css";
import CardStyle from "./style.css";

class CardItems extends Component {
    render (){
        return (
                <React.Fragment>
                    <div class="card">
                        <img src="..." class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Nom du Produit</h5>
                            <p class="card-text">Description.</p>
                            <a href="#" class="btn btn-primary">Plus d'informations</a>
                        </div>
                    </div>
                </React.Fragment>
        );
    }
}

export default CardItems;