import React, { useState } from "react";
import { useAuth } from "../../context/auth";
import axios from "axios";


const ProductDetailAdmin = (props) => {
    const { token } = useAuth();
    const article = props.article;
    const [stock, setStock] = useState(article.stock);
    const [isInStock, setisInStock] = useState(false);
    const handleUpdateProduct = () => {
        return props.history.push(`/admin/article/edit/${article.id}`);
    }
    const handleOutStockProduct = () => {
        const header = {
            "Content-Type": "multipart/form-data",
            "Authorization" : `Bearer ${token}`
        };
        axios.get("http://206.81.25.252:8000/article/outstock/" + article.id, {headers: header})
        .then(res => {
            const data = res.data;
            if(data.success === true){
                setStock("Empty");
                setisInStock(false)
            }
           
         
        })
       
    }
    return (
        <tbody>
            <tr>
                <td className="product_remove">
                    <button className="btn btn-danger" onClick={() => {props.remove(article.id)}}>Supprimer le produit</button>
                </td>
                <td className="product-name">{article.name}</td>
                <td className="product-name">{article.description.substring(0, 20)}{article.description.length > 20 ? "..." : null}</td>
                <td className="product-name">{stock}</td>
                <td>
                    <button type="submit" className="btn btn-success" onClick={() => handleUpdateProduct()}>Modifier</button>
                </td>
                <td>
                {isInStock ?
                      <button type="submit" className="btn btn-success" >Mettre en stock</button>
                    :
                    <button type="submit" className="btn btn-warning" onClick={() => handleOutStockProduct()}>Mettre en rupture de stock</button>
                }
                </td>
            </tr>
        </tbody>
    )
}

export default ProductDetailAdmin;