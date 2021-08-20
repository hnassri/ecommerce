import React, { useEffect,useState } from "react";
import { Link } from 'react-router-dom';
import axios from '../../../axios/axios';
import { useAuth } from "../../../context/auth";


const Category = (props) => {
    const [data,setData]=useState("");
    const { token }= useAuth();
    useEffect(() => {
        getCategory();
    }, []);
    const getCategory =()=>{
        axios.get('/category')
        .then(res => {
            if(res.data.success===true){
                setData(res.data.items)
            }

        })
        .catch((error) => {
            console.log(error.response)
        })
   
    }
    const handleRemoveCategory = (id) => {
        const header = {
            "Content-Type": "multipart/form-data",
            "Authorization" : `Bearer ${token}`
        };
        axios.delete("/category/" + id, {headers: header})
        .then(res => {
            const data = res.data;
            if(data.success === true){
                getCategory();
                alert(data.success.message);
            }else{
                console.log("Une erreur est survenue");
            }
        })
        .catch((e)=>{alert('impossible de supprimer un category parent')})
    }

    return(
        <div className="tab-pane fade" id="account-address" role="tabpanel" aria-labelledby="account-address-tab">
            <div className="p-4">
                <h2 className="widgets-title mb-4">Catégories</h2>
                <div className="widgets-searchbox">
                    <form id="widgets-searchbox">
                        <input className="input-field" type="text" placeholder="Rechercher" />
                        <button className="widgets-searchbox-btn" type="submit">
                        <i className="fa fa-search" />
                        </button>
                    </form>
                </div>
                <div className="product-topbar">
                    <ul>
                        <li className="short">
                            <select className="nice-select" style={{display: 'none'}}>
                                <option value={1}>Trier par nom (A-Z)</option>
                                <option value={2}>Trier par nom (Z-A)</option>
                            </select>
                        </li>
                        <li className="short">
                            <input className="cart_btn" defaultValue="Actualiser" type="submit" />
                        </li>
                        <li className="short">
                            <input className="cart_btn" defaultValue="Créer une catégorie" type="submit" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="cart-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form>
                                <div className="table-content table-responsive">
                                {data ?
                                    <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="cart-product-name">Nom</th>
                                                    <th className="product_remove">Supprimer</th>
                                                </tr>
                                            </thead>
                                          
                                            <tbody>
                                                {data.map((value) =>(
                                                        <tr>
                                                            <td className="product-name"><Link to='/admin/category/create'>{value.name}</Link></td>
                                                            <td className="product_remove">
                                                                <i className="pe-7s-close" data-tippy="Supprimer" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder"  onClick={() => handleRemoveCategory(value.id)} />
                                                            </td>
                                                        </tr>
                                                        )
                                                )}
                                              
                                            </tbody>  
                                    </table>
                                     :
                                     <p>Aucun Categorie</p>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Category;