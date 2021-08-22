import { Link } from 'react-router-dom';
import React, { useEffect,useState } from "react";
import BreadCrumb from '../../../../UserPanel/components/BreadCrumb';
import axios from '../../../../axios/axios';
import { useAuth } from "../../../../context/auth";
import { useParams } from "react-router-dom";
const CategoryUpdate= (props) => {
    const { id } = useParams();
    const { token } = useAuth();
    const [role, setRole] = useState();
    const [name, setname] = useState();

    const getCategory = () => {
        const user = localStorage.getItem("token");
        const api = "/category/info/" + id; 
        const token = user;
        axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} })
        .then(res => {
            const data = res.data;
            if(data.success === true){
                setname(data.data);
            }else {
                console.log("Une erreur est survenue");
            }
        })
    }
    useEffect(() => {
       getCategory();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
            var param = new URLSearchParams()
            param.append('name',name)
            const header = {
                'Content-Type': 'application/x-www-form-urlencoded',
                "Authorization" : `Bearer ${token}`
            }
            axios.put("/category/edit/"+id, param,  {headers: header})
                .then(res => {
                    alert('catégorie modifié avec succés');
                    return props.history.push("/admin");
                    
                })
                .catch(e => {
                    alert(e.response.data.error);
                })
            }
    

    return(
        <div className="login-register-area section-space-y-axis-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-md-3">
                        <div className="price-box">
                            <Link to="/admin">&larr; Retour</Link>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="login-form">
                                <h4 className="login-title">MODIFICATION D'UN CATEGORIE</h4>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label>Name</label>
                                        <input className="cart-plus-minus-box" type="text" value={name} required onChange={e => setname(e.target.value)}/>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-custom-size lg-size btn-webshop-primary">Sauvegarder</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryUpdate;