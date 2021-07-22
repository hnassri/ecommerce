import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryDetailAdmin from "../../components/CategoryDetailAdmin/index"
import { useAuth } from "../../context/auth";

const IndexCategoryAdmin = (props) => {
    const { token } = useAuth();
    const [categories, setCategories] = useState([]);
    const [new_category, setNewCategory] = useState();

    const getCategories = () => {
        const header = {
            "Content-Type": "multipart/form-data",
            "Authorization" : `Bearer ${token}`
        };
        axios.get("http://206.81.25.252:8000/category", {headers: header})
        .then(res => {
            const data = res.data;
            if(data.success === true){
                setCategories(data.items);
            }
        })
    }

    const handleAddCategory = (e) => {
        e.preventDefault();
        const header = {
            "Content-Type": "multipart/form-data",
            "Authorization" : `Bearer ${token}`
        };
        const formData = new FormData();
        formData.append("name", new_category);
        axios.post("http://206.81.25.252:8000/category_new", formData, {headers: header})
        .then(res => {
            const data = res.data;
            if(data.success === true){
                setNewCategory("");
                getCategories();
            }else{
                console.log("Une erreur est survenue");
            }
        }).catch(e => {
            if(e.response.data.message){
                alert(e.response.data.message);
            }
        })
    }
    const handleRemoveCategory = (id) => {
        const header = {
            "Content-Type": "multipart/form-data",
            "Authorization" : `Bearer ${token}`
        };
        axios.delete("http://206.81.25.252:8000/category/" + id, {headers: header})
        .then(res => {
            const data = res.data;
            if(data.success === true){
                getCategories();
            }else{
                console.log("Une erreur est survenue");
            }
        })
    }
    useEffect(() => {
        getCategories();
    }, []);

    return (
        <main className="main-content">
                <div className="cart-area section-space-y-axis-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div>
                                    <div className="row">
                                        <form className="col-12" onSubmit={handleAddCategory}>
                                            <div className="coupon-all">
                                                <div className="coupon">
                                                    <input type="text" placeholder="Ex: Console" value={new_category} onChange={e => setNewCategory(e.target.value)}/>
                                                </div>
                                                <div className="coupon">
                                                    <button className="button mt-xxs-30" type="submit">Ajouter la catégorie</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div>
                                    <div className="table-content table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="product_remove">Supprimer</th>
                                                    <th className="cart-product-name">Catégories</th>
                                                    <th className="cart-product-name">Modifier</th>
                                                </tr>
                                            </thead>
                                            {categories.map((value, index) => {
                                                return <CategoryDetailAdmin category={value} remove={handleRemoveCategory} key={index} {...props} />
                                            })}
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    )
}

export default IndexCategoryAdmin;