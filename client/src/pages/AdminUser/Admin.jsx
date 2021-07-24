import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminUser from "../../components/Admin/Admin"
import { useAuth } from "../../context/auth";

const Admin = (props) => {
    const { token } = useAuth();
    const [users, setUsers] = useState([]);
    const getUsers = () => {
        const header = {
            "Content-Type": "multipart/form-data",
            "Authorization" : `Bearer ${token}`
        };
        axios.get("http://206.81.25.252:8000/api/v1/user/all", {headers: header})
        .then(res => {
            const data = res.data;
            if(data.success === true){
                setUsers(data.data.map((value, index) => {
                        return <AdminUser user={value} remove={handleRemoveUser} key={index} {...props} />
                    })
                    );
            }
        })
    }
    const handleRemoveUser = (id) => {
        const header = {
            "Content-Type": "multipart/form-data",
            "Authorization" : `Bearer ${token}`
        };
        axios.delete("http://206.81.25.252:8000/api/v1/user/delete/" + id, {headers: header})
        .then(res => {
            const data = res.data;
            if(data.success === true){
                getUsers();
            }else{
                console.log("Une erreur est survenue");
            }
        })
    }
    useEffect(() => {
        getUsers();
    }, []);

    const handleAddUser = () => {
        return props.history.push("/admin/user/create");
    }

    return (
        <main className="main-content">
                <div className="cart-area section-space-y-axis-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="coupon-all">
                                                <div className="coupon">
                                                    <button className="button mt-xxs-30" type="submit" onClick={() => handleAddUser()}>Ajouter un utilisateur</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="table-content table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="product_remove">Supprimer</th>
                                                    <th className="cart-product-name">Email</th>
                                                    <th className="cart-product-name">Roles</th>
                                                    <th className="product-quantity">Modifier un utilisateur</th>
                                                </tr>
                                            </thead>
                                            {users}
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

export default Admin;