import React from "react";



const ProductCreateForm = (props) => {
    return(
       <div className="tab-pane fade" id="account-orders" role="tabpanel" aria-labelledby="account-orders-tab">
            <div className="p-4">
                <h2 className="widgets-title mb-4">Produits</h2>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12">
                    <form>
                        <div className="form-group mb-3">
                            <input id="name" name="name" type="text" className="form-control validate" placeholder="Nom du produit" />
                        </div>
                        <div className="form-group mb-3">
                            <textarea className="form-control validate tm-small" rows={5} placeholder="Description" defaultValue={""} />
                        </div>
                        <div className="input-group mb-3">
                            <input type="number" placeholder="Prix" className="form-control" min={0.00} max={10000.00} step="0.10" />
                            <div className="input-group-append">
                                <span className="input-group-text">€</span>
                            </div>
                        </div>
                        <div className="form-group mb-3">
                            <textarea className="form-control validate tm-small" rows={5} placeholder="Caractéristiques" defaultValue={""} />
                        </div>
                        <div className="row">
                            <ul className="mb-3">
                                <li className="short">
                                    <select className="nice-select" style={{display: 'none'}}>
                                        <option value="#">Toutes catégories</option>
                                    </select>
                                </li>
                            </ul>
                            <div className="cart-area mb-3">
                                <div className="quantity">
                                    <div className="cart-plus-minus">
                                        <input className="cart-plus-minus-box" defaultValue={1} type="text" />
                                        <div className="dec qtybutton">
                                            <i className="fa fa-minus" />
                                        </div>
                                        <div className="inc qtybutton">
                                            <i className="fa fa-plus" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4">
                    <div className="tm-product-img-edit mx-auto">
                        <img src="../Maquette/assets/images/product/medium-size/1-1-270x300.jpg" alt="Image produit" className="img-fluid d-block mx-auto" />
                    </div>
                    <div className="custom-file mt-3 mb-3">
                        <input id="fileInput" type="file" style={{display: 'none'}} />
                        <input type="button" className="btn btn-primary btn-block mx-auto" defaultValue="Charger une image" onclick="document.getElementById('fileInput').click();" />
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-block">Sauvegarder</button>
                </div>
            </div>
        </div>

    )
}

export default ProductCreateForm;