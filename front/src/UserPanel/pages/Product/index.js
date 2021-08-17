import axios from "../../../axios/axios";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb"
import ProductShow from "../../components/ProductShow";
import { useParams } from 'react-router-dom';

const Product = () => {
    const [article, setArticle] = useState("");
    const {id} = useParams();
    const getArticle = () => {
      axios.get("/article/"+id)
        .then(res => {
            if(res.data.success === true){
                setArticle(res.data.item[0]);
            }
        })
        .catch(e => {
            if(e.response !== undefined){
                if(e.response.data.success === false){
                    console.log(e.response.data.message);
                }
            }else{
                console.log("An error occured");
            }   
        })
    }
    useEffect(() => {
        getArticle();
    }, []);
    return (
        <div className="main-content">
            <BreadCrumb name="Detail du produit"/>
            <ProductShow article={article}/>;
        </div>
    )
}

export default Product;