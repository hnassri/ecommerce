import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/auth"
function checkData(data){
    data.forEach(element => {
        if(element == ""){
            return false;
        }
    })
    return true;
}

function convertToFormData(data, data_name){
    const formData = new FormData();
    for(let i = 0; i < data.length; i++){
        formData.append(data_name[i], data[i]);
    }
    formData.append("uuid", "Gaming");
    return formData;
}

const FormArticleUpdate = () => {
    const { id } = useParams();
    const { token } = useAuth();
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();
    const [stock, setStock] = useState(true);
    const [category, setCategory] = useState([]);
    const [categories, setCategories] = useState([]);
    const [feature, setFeature] = useState([]);
    const [article, setArticle] = useState();

    const getArticle = () => {
        const header = {
            "Content-Type": "multipart/form-data",
            "Authorization" : `Bearer ${token}`
        };
        axios.get("http://127.0.0.1:8000/admin/article/" + id, {headers: header})
        .then(res => {
            const data = res.data;
            if(data.success === true){
                console.log(data.item);
                setName(data.item.name);
                setPrice(data.item.price);
                setQuantity(data.item.quantity);
                setDescription(data.item.description);
                setStock(data.item.stock);
                setCategory(data.item.categories[0]);
                setFeature(data.item.features[0]);
            }else {
                console.log("Une erreur est survenue");
            }
        })
    }

    useEffect(() => {
        axios.get("http://206.81.25.252:8000/category")
        .then(res => {
            const data = res.data
            if(data.success === true){
                setCategories(data.items);
            }
        })
        getArticle();
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = [name, price, quantity, description, image, stock, category, feature];
        if(checkData(data)){
            const data_name = ["name", "price", "quantity", "description", "images[]", "stock", "categories[]", "features[]"];
            const formData = convertToFormData(data, data_name);
            const header = {
                "Content-Type": "multipart/form-data",
                "Authorization" : `Bearer ${token}`
            };
            axios.post("http://206.81.25.252:8000/article/edit/"+id, formData, {headers: header})
            .then(res => {
                const data = res.data;
                if(data.success === true){
                    console.log(data.message);
                }
            })
            .catch(e => {
                if(e.response){
                    console.log(e.response.data.message);
                }
            })
        }
    }

    return(
        <main className="main-content">
            <div className="breadcrumb-area breadcrumb-height" data-bg-image="assets/images/breadcrumb/bg/1-1-1919x388.jpg">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-lg-12">
                            <div className="breadcrumb-item">
                                <h2 className="breadcrumb-heading">Single Product</h2>
                                <ul>
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li>Single Product</li>
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
                                    <span className="new-price">Nom du produit</span>
                                    <div>
                                        <input className="cart-plus-minus-box" placeholder="Ex: American Marigold" type="text" value={name} required onChange={e => setName(e.target.value)}/>
                                    </div>
                                    <div className="price-box">
                                        <span className="new-price">Prix</span>
                                        <div>
                                            <input className="cart-plus-minus-box" type="number" step="0.01" value={price} required onInput={e => setPrice(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="price-box">
                                        <span className="new-price">Description</span>
                                        <div className="input-group">
                                            <textarea className="form-control" aria-label="With textarea" placeholder="A normal description" value={description} required onChange={e => setDescription(e.target.value)}></textarea>
                                        </div>
                                    </div>
                                    <div className="price-box">
                                        <span className="new-price">Caractéristique</span>
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Ex: Écran 4K" value={feature} required onChange={e => setFeature(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="price-box">
                                        <span className="new-price">Categorie</span>
                                        <div className="input-group">
                                            <select className="form-control" aria-label="With textarea" required onChange={e => setCategory(e.target.value)}>
                                                {categories.map((value, index) => {
                                                    return (value.name === category) ?
                                                        <option value={value.name} key={index} selected >{value.name}</option>
                                                        :  <option value={value.name} key={index} >{value.name}</option>
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="stock" id="flexRadioDefault1" value="true" onClick={e => setStock(e.target.value)} checked={stock === true}/>
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        En stock
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="stock" id="flexRadioDefault2" value="false" onClick={e => setStock(e.target.value)} checked={stock === false}/>
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        En Rupture de Stock
                                        </label>
                                    </div>
                                    <div className="input-group mb-3">
                                        <label className="input-group-text" htmlFor="inputGroupFile01">Ajouter une image</label>
                                        <input type="file" className="form-control" id="inputGroupFile01" onChange={e => setImage(e.target.files[0])}/>
                                    </div>
                                    <div className="single-product-content">
                                        <ul className="quantity-with-btn">
                                            <li className="quantity">
                                                <div className="">
                                                    <span className="new-price">Quantité</span>
                                                    <input className="cart-plus-minus-box" type="number" value={quantity} required onChange={e => setQuantity(e.target.value)}/>
                                                </div>
                                            </li>
                                            <li className="add-to-cart">
                                                <button className="btn btn-custom-size lg-size btn-webshop-primary" type="submit">Enregistrer</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default FormArticleUpdate;