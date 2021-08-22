import React, { useEffect,useState } from "react";
import { Link } from 'react-router-dom';
import axios from '../../../../axios/axios';
import { useAuth } from "../../../../context/auth";
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


const ProductCreateForm = (props) => {
    const { token } = useAuth();
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();
    const [stock, setStock] = useState(true);
    const [category, setCategory] = useState([]);
    const [data,setData]=useState("");
    const [feature, setFeature] = useState([]);

    
    useEffect(() => {
        getCategory();
    }, []);
    const getCategory =()=>{
        axios.get('/category')
        .then(res => {
            if(res.data.success===true){
                setData(res.data.items)
            }

        })
        .catch((error) => {
            console.log(error.response)
        })
   
    }
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
            axios.post("/article_new", formData, {headers: header})
            .then(res => {
                const data = res.data;
                if(data.success === true){
                    console.log(data.message);
                    alert(data.message);
                    props.history.push('/admin')
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
        <div className="tab-pane " id="account-orders" role="tabpanel" aria-labelledby="account-orders-tab">
            
        <div className="p-4">
            <Link to="/admin">&larr; Retour</Link>
            <h2 className="widgets-title mb-4">Créer un produit</h2>
        </div>
        <form className="single-product-content" onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12">
                <form>
                    <div className="form-group mb-3">
                        <input id="name" name="name" type="text" className="form-control validate" placeholder="Nom du produit" onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className="form-group mb-3">
                        <textarea className="form-control validate tm-small" rows={5} placeholder="Description" defaultValue={""} onChange={e => setDescription(e.target.value)}/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="number" placeholder="Prix" className="form-control" min={0.00} max={10000.00} step="0.10" onChange={e => setPrice(e.target.value)}/>
                        <div className="input-group-append">
                            <span className="input-group-text">€</span>
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <textarea className="form-control validate tm-small" rows={5} placeholder="Caractéristiques" onChange={e => setFeature(e.target.value)} defaultValue={""} />
                    </div>
                    <div className="row">
                        <ul className="mb-3">
                            <li className="short">
                                <select className="nice-select"  onChange={e => setCategory(e.target.value)}>
                                <option value="">CHOISIR UNE CATEGORIE</option>
                                    {data ?
                                        data.map((value, index) => {
                                            return <option value={value.name} key={index}>{value.name}</option>
                                        })
                                        :
                                        <option value="">AUCUNE CATEGORIE EXISTANTE</option>
                                    }
                                
                                </select>
                            </li>
                        </ul>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="stock" id="flexRadioDefault1" value="true" onClick={e => setStock(e.target.value)} defaultChecked/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                        En stock
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="stock" id="flexRadioDefault2" value="false" onClick={e => setStock(e.target.value)}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                        En Rupture de Stock
                        </label>
                    </div>
                </form>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
                <div className="tm-product-img-edit mx-auto">
                    {image ? <img src={URL.createObjectURL(image)} alt="Image produit" className="img-fluid d-block mx-auto" />
                        : <img src="/assets/images/product/medium-size/1-1-270x300.jpg" alt="Image produit" className="img-fluid d-block mx-auto" />
                    }
                </div>
                <div className="custom-file mt-3 mb-3">
                    <input type="file" className="form-control" id="inputGroupFile01" onChange={e => setImage(e.target.files[0])}/>
                </div>
            </div>
            <div className="single-product-content">
                <ul className="quantity-with-btn">
                    <li className="quantity">
                        <div className="">
                            <span className="new-price">Quantité</span>
                            <input className="cart-plus-minus-box" type="number" required onChange={e => setQuantity(e.target.value)}/>
                        </div>
                    </li>
                    
                </ul>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary btn-block">Sauvegarder</button>
            </div>
        </div>
        </form>
    </div>

    )
}

export default ProductCreateForm;

