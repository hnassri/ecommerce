import React, {useEffect, useState} from "react";
import axios from '../../../axios/axios';
import { Link } from "react-router-dom";

const SideBar = (props) => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState([]);
    const setArticles = props.setArticles;
    const searchByName = (e) => {
        e.preventDefault();
        axios.get("/filter/name/" + name)
        .then(res => {
            if(res.data.success === true){
                setArticles(res.data.items);
            }
        })
        .catch((error) => {
            if(error.response.data !== undefined && error.response.data.success === false ){
                setArticles(null);
            }else{
                console.log(error);
            }    
        });
    }
    const searchByCategory = (name) => {
        if (name === ""){
            props.getArticles();
        }else{
            axios.get("/filter/category/" + name)
            .then(res => {
                if(res.data.success === true){
                    setArticles(res.data.items);
                }
            })
            .catch((error) => {
                if(error.response.data !== undefined && error.response.data.success === false ){
                    setArticles(null);
                }else{
                    console.log(error);
                }    
            });
        }
        setName("");
    }

    useEffect(() => {
        const api = '/category'; 
        axios.get(api)
        .then(res => {
            if(res.data.success === true){
                setCategories(res.data.items);
            }
        })
        .catch((error) => {
          console.log(error)
        });
    }, []);
    return (
        <div className="col-xl-3 col-lg-4 order-2 order-lg-1 pt-5 pt-lg-0">
            <div className="sidebar-area">
                <div className="widgets-searchbox">
                    <form id="widgets-searchbox" onSubmit={searchByName}>
                        <input className="input-field" type="text" placeholder="Rechercher" onChange={e => setName(e.target.value)} value={name}/>
                        <button className="widgets-searchbox-btn" type="submit">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                </div>
                <div className="widgets-area">
                    <div className="widgets-item pt-0">
                        <h2 className="widgets-title mb-4">Catégorie</h2>
                        <ul className="widgets-category">
                            <li>
                                <Link to="#" onClick={e => searchByCategory("")}>
                                    <i className="fa fa-chevron-right"></i>&nbsp;Toute Catégorie
                                </Link>
                            </li>
                            {categories.map((value,index) => {
                                return(
                                    <li key={index}>
                                        <Link to="#" onClick={e => searchByCategory(value.name)}>
                                            <i className="fa fa-chevron-right"></i>&nbsp;{value.name}    
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div class="widgets-item widgets-filter">
                        <h2 class="widgets-title mb-4">Filtres</h2>
                        <div class="product-topbar">
                            <ul>
                                <li class="short">
                                    <select class="nice-select">
                                        <option value="1">Trier par nom (A-Z)</option>
                                        <option value="2">Trier par nom (Z-A)</option>
                                        <option value="3">Trier par prix ↑</option>
                                        <option value="4">Trier par prix ↓</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;