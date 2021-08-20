import React from "react";

const AdressTab = (props) => {
    const value = props.value;
    return (
        <tr>
            <td className="product-name">{value.surname}</td>
            <td className="product-name">{value.name}</td>
            <td className="product-name">{value.adress}</td>
            <td className="product-name">{value.city}</td>
            <td className="product-name">{value.postalCode}</td>
            <td className="product-name">{value.country}</td>
            <td className="product_remove">
            <button className="btn btn-danger" onClick={() =>{props.handleRemoveUser(value.id)}}><i class="pe-7s-close" data-tippy="Supprimer" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder"></i></button>
            </td>
        </tr>
    )
}

export default AdressTab;