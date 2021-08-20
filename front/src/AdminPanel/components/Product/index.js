import React from "react";



const Product = (props) => {
    return(
      <div className="tab-pane fade" id="account-orders" role="tabpanel" aria-labelledby="account-orders-tab">
            <div className="p-4">
                <h2 className="widgets-title mb-4">Produits</h2>
                <div className="widgets-searchbox">
                    <form id="widgets-searchbox">
                        <input className="input-field" type="text" placeholder="Rechercher" />
                        <button className="widgets-searchbox-btn" type="submit">
                        <i className="fa fa-search" />
                        </button>
                    </form>
                </div>
                <div className="product-topbar">
                <ul>
                    <li className="short">
                        <select className="nice-select" style={{display: 'none'}}>
                            <option value="#">Toutes catégories</option>
                        </select>
                    </li>
                    <li className="short">
                        <select className="nice-select" style={{display: 'none'}}>
                            <option value={1}>Trier par nom (A-Z)</option>
                            <option value={2}>Trier par nom (Z-A)</option>
                            <option value={3}>Trier par prix ↑</option>
                            <option value={4}>Trier par prix ↓</option>
                        </select>
                    </li>
                    <li className="short">
                        <input className="cart_btn" defaultValue="Actualiser" type="submit" />
                    </li>
                    <li className="short">
                        <input className="cart_btn" defaultValue="Créer un produit" type="submit" />
                    </li>
                </ul>
                </div>
            </div>
            <div className="cart-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form>
                                <div className="table-content table-responsive">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th className="cart-product-name">Nom</th>
                                            <th className="product-price">Status</th>
                                            <th className="product-quantity">Changement Stock</th>
                                            <th className="product-quantity">Quantités</th>
                                            <th className="product-subtotal">Prix</th>
                                            <th className="product_remove">Supprimer</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="product-name"><a href="#">Nom (À Définir)</a></td>
                                            <td className="product-name">Status stock (À Définir)</td>
                                            <td className="product-name">
                                                <input className="cart_btn" defaultValue="Hors stock" type="submit" />
                                                {/* <input class="cart_btn" value="En stock" type="submit"> */}
                                            </td>
                                            <td className="quantity">
                                            <div className="cart-plus-minus">
                                                <input className="cart-plus-minus-box" defaultValue={1} type="text" />
                                                <div className="dec qtybutton">
                                                    <i className="fa fa-minus" />
                                                </div>
                                                <div className="inc qtybutton">
                                                    <i className="fa fa-plus" />
                                                </div>
                                            </div>
                                            </td>
                                            <td className="product-subtotal"><span className="amount">Prix (À Définir)</span></td>
                                            <td className="product_remove">
                                                <a href="#">
                                                    <i className="pe-7s-close" data-tippy="Supprimer" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" />
                                                </a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product;