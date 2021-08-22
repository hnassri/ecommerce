import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

const CartTab = (props) => {
    const { removeItem, items, updateItemQuantity }= useCart();
    const item = props.item;
    const handleRemoveItem = () => {
        removeItem(item.id);
    }
    const handleAddItem = () => {
        updateItemQuantity(item.id, item.quantity + 1);
    }
    const handleSubItem = () => {
        updateItemQuantity(item.id, item.quantity - 1);
    }
    return(
        <tr>
            <td className="product_remove">
                <a href="#" onClick={handleRemoveItem}>
                    <i className="pe-7s-close" data-tippy="Supprimer" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder" />
                </a>
            </td>
            <td className="product-thumbnail img-cart">
                <Link to={"/article/" + item.id}>
                    <img src={"http://127.0.0.1:8000" + item.images[0].url} alt="Image produit" />
                </Link>
            </td>
            <td className="product-name"><Link to={"/article/" + item.id}>{item.name}</Link></td>
            <td className="product-price"><span className="amount">{(item.price).toFixed(2)}€</span></td>
            <td className="quantity">
                <div className="cart-plus-minus">
                    <input className="cart-plus-minus-box" value={item.quantity} type="text" />
                    <div className="dec qtybutton">
                        <i className="fa fa-minus" onClick={handleSubItem} />
                    </div>
                    <div className="inc qtybutton">
                        <i className="fa fa-plus" onClick={handleAddItem} />
                    </div>
                </div>
            </td>
            <td className="product-subtotal"><span className="amount">{(item.itemTotal).toFixed(2)}€</span></td>
        </tr>
    )
}

export default CartTab;