import { Link } from 'react-router-dom';
import axios from '../../../../axios/axios';
import { useAuth } from "../../../../context/auth";
import React, { useEffect,useState } from "react";


const ProductDetailAdmin = (props) => {
    const { token } = useAuth();
    const article = props.article;
    const [stock, setStock] = useState(article.stock);
    const [isInStock, setisInStock] = useState("");
    
    const handleUpdateProduct = () => {
        return props.history.push(`/admin/article/edit/${article.id}`);
    }
    const handleOutStockProduct = () => {
       
        const header = {
            "Content-Type": "multipart/form-data",
            "Authorization" : `Bearer ${token}`
        };
        axios.get("/article/outstock/" + article.id, {headers: header})
        .then(res => {
            const data = res.data;
            if(data.success === true){
                setStock("Empty");
                window.location.reload();
                alert('vous avez retiré un article de son stock')
            }
        })
    }
    const handleInStockProduct = () => {
        const header = {
            "Content-Type": "multipart/form-data",
            "Authorization" : `Bearer ${token}`
        };
        axios.get("/article/instock/" + article.id, {headers: header})
        .then(res => {
            const data = res.data;
            if(data.success === true){
                setStock("Full");  
            }
        })    
    }

    return (
         <tbody>                            
         <tr>
            <td className="product-name"><a href="#">{article.name}</a></td>
            <td className="product-name">{stock} </td>
            <td>
                {stock === 'empty' ?
                <i className="btn btn-success" onClick={() => handleInStockProduct()}>Mettre en stock</i>
                :
                <i className="btn btn-warning" onClick={() => handleOutStockProduct()}>Mettre en rupture de stock</i>
                }
            </td>
            <td className="product-subtotal"><span className="amount">{article.price}</span></td>
            <td className="product_remove">
                <i className="pe-7s-close" data-tippy="Supprimer" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" onClick={() => {props.remove(article.id)}}/>            
            </td>
         </tr>
     </tbody>
    )
}

export default ProductDetailAdmin;