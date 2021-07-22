import React, { Component, useState,useEffect } from "react"
import { useAuth } from "../../context/auth";
import axios from 'axios';
const Admin = props => {

    const api = 'http://206.81.25.252:8000/api/v1/user/all'; 
    const [User, setUser] = useState('')
    const {token} = useAuth();
    useEffect(() => {
        axios({
            method: "get",
            url: api,
            headers: { 
              
                "Authorization" : `Bearer ${token}`
            },
          })
        .then(res => {
        setUser(res.data.data);
      
        })
        .catch((e) => {
        console.log(e.response)
        });
    }, []); 



    return (
      <div>
      <div className="preloader-activate preloader-active open_tm_preloader">
        <div className="preloader-area-wrap">
          <div className="spinner d-flex justify-content-center align-items-center h-100">
            <div className="bounce1" />
            <div className="bounce2" />
            <div className="bounce3" />
          </div>
        </div>
      </div>
      <div className="main-wrapper">
        {/* Begin Main Content Area */}
        <main className="main-content">
          <div className="cart-area section-space-y-axis-100">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <form>
                    <div className="row">
                      <div className="col-12">
                        <div className="coupon-all">
                          <div className="coupon">
                            <button className="button mt-xxs-30" defaultValue="Ajouter un produit" type="submit">
                                Creer un utilisateur
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <form>
                    <div className="table-content table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="product_remove">Supprimer</th>
        
                            <th className="cart-product-name">Email</th>
                            <th className="cart-product-name">Roles</th>
                            <th className="product-quantity">Modifier un user</th>
                          </tr>
                        </thead>
                        {User.map((utilisateur) => (
                            <tbody>
                            <tr>
                            <td className="product_remove">
                            
                              <i className="pe-7s-close" data-tippy="Remove" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" />
                      
                            </td>
                            <td className="product-name">{utilisateur.email}</td>
                            <td className="product-name">{utilisateur.roles[0]}</td>
                            <td>
                            <a href="#">
                              <button type="submit">Modifier</button>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                        ))}
                       
                      </table>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      </div>
      
    )
}

export default Admin