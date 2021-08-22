import { Link } from 'react-router-dom';
import axios from '../../../axios/axios';
import { useAuth } from "../../../context/auth";
import React, { useEffect,useState } from "react";
import UserDetail from './UserDetail'


const Users = (props) => {
    const { token } = useAuth();
    const [users, setUsers] = useState([]);
    const getUsers = () => {
        const header = {
            "Content-Type": "multipart/form-data",
            "Authorization" : `Bearer ${token}`
        };
        axios.get("/api/v1/user/all", {headers: header})
        .then(res => {
            const data = res.data;
            if(data.success === true){
                setUsers(data.data.map((value, index) => {
                        return <UserDetail user={value} remove={handleRemoveUser} key={index} {...props} />
                    })
                    );
            }
        })
    }

    const handleRemoveUser = (id) => {
        const header = {
            "Content-Type": "multipart/form-data",
            "Authorization" : `Bearer ${token}`
        };
        axios.delete("/api/v1/user/delete/" + id, {headers: header})
        .then(res => {
            const data = res.data;
            if(data.success === true){
                getUsers();
                alert('utilisateur supprimé avec succés')

            }else{
                console.log("Une erreur est survenue");
            }
        })
    }
    useEffect(() => {
        getUsers();
    }, []);

    return(
       <div className="tab-pane fade" id="account-details" role="tabpanel" aria-labelledby="account-details-tab">
            <div className="p-4">
                <h2 className="widgets-title mb-4">Utilisateurs</h2>
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
                        <Link to="/admin/create/user">CREER UN UTILISATEUR</Link>
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
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="cart-product-name">E-mail</th>
                                                <th className="cart-product-name">Rôles</th>
                                                <th className="product_remove">Supprimer</th>
                                            </tr>
                                        </thead>
                                    {users}
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>

    )
}

export default Users;