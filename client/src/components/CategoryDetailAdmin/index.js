import React, { useState } from "react";
import { useAuth } from "../../context/auth";
import axios from "axios";


const CategoryDetailAdmin = (props) => {
    const { token } = useAuth();
    const category = props.category;
    const [isInUpdate, setIsInUpdate] = useState(false);
    const [category_name, setCategoryName] = useState(category.name);
    const handleUpdateProduct = () => {
        setIsInUpdate(true);
    }
    const handleSaveProduct = () => {
        if(category_name !== category.name){
            const header = {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization" : `Bearer ${token}`
            };
            const params = new URLSearchParams()
            params.append('name', category_name)
            axios.put("http://206.81.25.252:8000/category/edit/" + category.id, params, {headers: header})
            .then(res => {
                const data = res.data;
                if(data.success === true){
                    alert(data.message);
                }else{
                    console.log("Une erreur est survenue");
                }
            }).catch(e => {
                if(e.response.data.message){
                    alert(e.response.data.message);
                }
            })
        }
        setIsInUpdate(false);
    }
    return (
        <tbody>
            <tr>
                <td className="product_remove">
                    <button className="btn btn-danger" onClick={() => {props.remove(category.id)}}>Supprimer la catégorie</button>
                </td>
                {isInUpdate ?
                    <td className="product-name"><input type="text" value={category_name} onChange={(e) => setCategoryName(e.target.value)}/></td>
                    :
                    <td className="product-name">{category_name}</td>
                }
                <td>
                    {isInUpdate ?
                        <button type="submit" className="btn btn-success" onClick={() => handleSaveProduct()}>Sauvegarder la catégorie</button>
                        :
                        <button type="submit" className="btn btn-success" onClick={() => handleUpdateProduct()}>Modifier la catégorie</button>
                    }
                </td>
            </tr>
        </tbody>
    )
}

export default CategoryDetailAdmin;