import { Link } from 'react-router-dom';
import React, { useEffect,useState } from "react";
import BreadCrumb from '../../../../UserPanel/components/BreadCrumb';
import axios from '../../../../axios/axios';
import { useAuth } from "../../../../context/auth";
import { useParams } from "react-router-dom";
const UserUpdate= (props) => {
    const { id } = useParams();
    const { token } = useAuth();
    const [role, setRole] = useState();
    const [email, setEmail] = useState();

    const getUser = () => {
        const user = localStorage.getItem("token");
        const api = "/api/v1/user/" + id; 
        const token = user;
        axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} })
        .then(res => {
            const data = res.data;
            if(data.success === true){
                setEmail(data.data.email)
                setRole(data.data.roles[0])

            }else {
                console.log("Une erreur est survenue");
            }
        })
    }
    useEffect(() => {

        getUser();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
            var param = new URLSearchParams()
            param.append('email',email)
            param.append('roles',`["${role}"]`);
            const header = {
                'Content-Type': 'application/x-www-form-urlencoded',
                "Authorization" : `Bearer ${token}`
            }
            axios.put("/api/v1/user/edit/"+id, param,  {headers: header})
                .then(res => {
                    alert('utilisateur modifié avec succés');
                    return props.history.push("/admin");
                    
                })
                .catch(e => {
                    alert(e.response.data.error);
                })
            }
    
    const Roles = role;
        let button;
        if (Roles==="ROLE_ADMIN") {
        button =   
            <select className="nice-select"  value={role} onChange={e => setRole(e.target.value)}>                               
                <option value={role}>{role}</option>
                <option value="ROLE_USER">ROLE_USER</option>  
            </select>;
        } else {
        button =    
            <select value={role} onChange={e => setRole(e.target.value)}>                               
                <option value={role}>{role}</option>
                <option value="ROLE_ADMIN">ROLE_ADMIN</option>  
            </select>;
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
                            <h4 className="login-title">MODIFICATION D'UN UTILISATEUR</h4>
                            <div className="row">
                                <div className="col-md-12">
                                    <label>Adresse Email</label>
                                    <input className="cart-plus-minus-box" placeholder="Ex: American Marigold" type="text" value={email} required onChange={e => setEmail(e.target.value)}/>
                                </div>
                                <span className="new-price">Role</span>
                                <div className="row">
                                <ul className="mb-3">
                                    <li className="short">
                                    {button}
                                    </li>
                                </ul>
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

export default UserUpdate;