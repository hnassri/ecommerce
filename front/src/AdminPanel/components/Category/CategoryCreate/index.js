import React, { useEffect,useState } from "react";
import { Link } from 'react-router-dom';
import axios from '../../../../axios/axios';
import { useAuth } from "../../../../context/auth";


const Category = (props) => {
    const [data,setData]=useState("");
    const { token }= useAuth();
    const [name, setName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(name===""){
            alert("les mots de passes sont pas identiques");
        }
        else{
        let formData = new FormData();
        formData.append("name", name);
        const header = {
            "Content-Type": "multipart/form-data",
            "Authorization" : `Bearer ${token}`
        }
        axios.post("/category_new", formData, {headers: header})
            .then(res => {
                alert('catégorie créée');
                return props.history.push("/admin");
                
            })
            .catch(e => {
                alert(e.response.data.error);
            })
        }
      
    }
    return(
        <div className="login-register-area section-space-y-axis-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-md-3">
                    <form onSubmit={handleSubmit}>
                        <div className="login-form">
                            <h4 className="login-title">ENREGISTRER UN CATEGORIE</h4>
                            <div className="row">
                                <div className="col-md-12">
                                    <label>Name</label>
                                    <input type="name" placeholder="name" onChange={event => setName(event.target.value)}/>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-custom-size lg-size btn-webshop-primary">Sauvegarder</button>
                            </div>
                        </div> 
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Category;