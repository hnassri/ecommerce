import React, {useEffect, useState} from "react";
import axios from '../../../axios/axios';
import { Link } from "react-router-dom";

const SideBar = () => {
    const [categories, setCategories] = useState([]);

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
                    <form id="widgets-searchbox">
                        <input className="input-field" type="text" placeholder="Search"/>
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
                                <Link>
                                    <i className="fa fa-chevron-right"></i>&nbsp;Toute Catégorie
                                </Link>
                            </li>
                            {categories.map((value,index) => {
                                return(
                                    <li key={index}>
                                        <Link>
                                            <i className="fa fa-chevron-right"></i>&nbsp;{value.name}    
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;