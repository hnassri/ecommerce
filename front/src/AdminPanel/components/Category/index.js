import React from "react";



const Category = (props) => {
    return(
    <div className="tab-pane fade" id="account-address" role="tabpanel" aria-labelledby="account-address-tab">
        <div className="p-4">
            <h2 className="widgets-title mb-4">Catégories</h2>
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
                            <option value={1}>Trier par nom (A-Z)</option>
                            <option value={2}>Trier par nom (Z-A)</option>
                        </select>
                    </li>
                    <li className="short">
                        <input className="cart_btn" defaultValue="Actualiser" type="submit" />
                    </li>
                    <li className="short">
                        <input className="cart_btn" defaultValue="Créer une catégorie" type="submit" />
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
                                                <th className="product_remove">Supprimer</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="product-name"><a href="#">Nom (À Définir)</a></td>
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

export default Category;