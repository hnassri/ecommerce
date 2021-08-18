import React, { useState } from "react";
import { Link } from 'react-router-dom';


const MyOrders= (props) => {

    return (
       <div className="tab-pane fade" id="account-orders" role="tabpanel" aria-labelledby="account-orders-tab">
            <div className="myaccount-orders">
                <h4 className="small-title">Mes commandes</h4>
                <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <tbody>
                    <tr><th>Commande</th>
                        <th>Date d'achat</th>
                        <th>Status</th>
                        <th>Prix d'achat</th>
                        <th />
                    </tr>
                    <tr>
                        <td><a className="account-order-id" href="#">#ID</a></td>
                        <td>Mardi 17 Août 2021</td>
                        <td>Payés</td>
                        <td>30€</td>
                        <td><a href="#" className="btn btn-dark"><span>Voir</span></a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>

    )
}

export default MyOrders;