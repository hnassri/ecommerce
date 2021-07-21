import React,{useRef,useState} from 'react';
import Categories from '../Shop/SlideBar/Categories/Catgefories';



const FrontArticle = () => {

/* const [name, setName] = useState("");
const [prix, setPrix] = useState("");
const [quantite, setQuantite] = useState(""); */
const [features, setFeature] = useState("qqq");
/* const [categories, setCategories] = useState("");
const [stock, setStock] = useState("");
const [image, setImage] = useState("");  */ 


/* const nameChange = e=>setName(e.target.value);
const prixChange = e=>setPrix(e.target.value);
const quantiteChange = e=>setQuantite(e.target.value); */
const featuresChange = e=>setFeature(e.target.value);
/* const categoriesChange = e=>setCategories(e.target.value);
const stockChange = e=>setStock(e.target.value);
const imageChange = e=>setImage(e.target.value); */


    return (
        <form>
            <div className="form-row">
               {/*  <div className="form-group col-md-6">
                    <label htmlFor="name">nom</label>
                    <input type="text" value={name} className="form-control" id="name" onChange={e=>nameChange(e)} />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="prix">Prix</label>
                    <input type="text" value={prix} className="form-control" id="prix" onChange={e=>prixChange(e)}/>
                </div>
            </div>


            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="quantite">quantite</label>
                    <input type="number" value={quantite} className="form-control" onchange={e=>quantiteChange(e)} />
                </div> */}
                <div className="form-group col-md-6">
                    <label htmlFor="features">features</label>
                    <input type="text" value={features} className="form-control" id="features" onchange={e=>featuresChange(e)} />
                </div>
                {/* <div className="form-group col-md-6">
                    <label htmlFor="categories">categories</label>
                    <input type="text" value={categories} className="form-control" id="categories" onchange={e=>categoriesChange(e)}/>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1"onchange={e=>stockChange(e)} />
                    <label className="form-check-label" value={stock} htmlFor="defaultCheck1">
                        stock
                    </label>
                </div>


                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">image</label>
                    <input type="file" value={image} className="form-control-file" id="exampleFormControlFile1" onchange={e=>imageChange(e)}/>
                </div> */}

            </div>
            <button   className="btn btn-primary">Sign in</button>
        </form>

    )
}

export default FrontArticle;
