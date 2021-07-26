import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/auth"



const UserUpdate = (props) => {
    const { id } = useParams();
    const { token } = useAuth();
    const [role, setRole] = useState();
    const [email, setEmail] = useState();

    const getUser = () => {
        const user = localStorage.getItem("token");
        const api = "http://206.81.25.252:8000/api/v1/user/" + id; 
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
        const api = "http://206.81.25.252:8000/api/v1/user/edit/"+id; 
            var param = new URLSearchParams()
            param.append('email',email)
            param.append('roles',`["${role}"]`);

        axios({
            method: 'put',
            url: api,
           data:param,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              "Authorization" : `Bearer ${token}`
            }
            
          })
        
            .then(res => {
              alert(res.data.payload);

              return props.history.push("/admin/users");
            })
            .catch(e => {
                console.log(e.response);
            })
    }
    const Roles = role;
        let button;
        if (Roles==="ROLE_ADMIN") {
        button =   
            <select value={role} onChange={e => setRole(e.target.value)}>                               
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
        <main className="main-content">
            <div className="breadcrumb-area breadcrumb-height" data-bg-image="assets/images/breadcrumb/bg/1-1-1919x388.jpg">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-12">
                            <div className="breadcrumb-item">
                                <h2 className="breadcrumb-heading">ADD USER</h2>
                                <ul>
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li>ADD USER</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-product-area section-space-top-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 pt-5 pt-lg-0">
                            <form className="single-product-content" onSubmit={handleSubmit}>
                                <div className="price-box">
                                    <span className="new-price">Email</span>
                                    <div>
                                        <input className="cart-plus-minus-box" placeholder="Ex: American Marigold" type="text" value={email} required onChange={e => setEmail(e.target.value)}/>
                                    </div>
                                    <div className="price-box">
                                        <span className="new-price">Role</span>
                                        <div>
                                            {button}
                                        </div>
                                    </div>
                                 
                                            <li className="add-to-cart">
                                                <button className="btn btn-custom-size lg-size btn-webshop-primary" type="submit">Enregistrer</button>
                                            </li>
                                   
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default UserUpdate;