import React, { Component ,useState} from "react"
import axios from "axios"


const AccountForm = props =>{
    const [newpassword, setNewPassword] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
 
    const handleSubmit = async e => {
          
        e.preventDefault();

        const users = {
          password: password,
          newpassword: newpassword
        }

        if(newpassword.length < 6){
            alert(" Mot de passe trop court");
        }
        if(newpassword!=confirmpassword){
            alert("Vos mots de passes sont pas identiques");
        }
      

        const user = localStorage.getItem("token");
        const api = 'http://206.81.25.252:8000/api/v1/user/edit/password'; 
        const token = user;
        var bodyFormData = new FormData();
        bodyFormData.append('password', password);
        bodyFormData.append('newpassword', newpassword);
        axios({
            method: "post",
            url: api,
            data: bodyFormData,
            headers: { 
               
                "Authorization" : `Bearer ${token}`
            },
          })
        .then(res => {
        console.log(res);
        })
        .catch((e) => {
        console.log(e.response)
        });
        console.log(token);


    }

     return (
        
        <div>
            <br />
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="password"
                            placeholder="password"
                            onChange={event => setPassword(event.target.value)}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            name="newpassword"
                            placeholder="new password"
                            onChange={event => setNewPassword(event.target.value)}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            name="confirmpassword"
                            placeholder="confirm password"
                            onChange={event => setConfirmPassword(event.target.value)}
                        />
                    </div>
                    <br />
                    <div>
                        <button className="btn btn-login btn-outline-success" type="submit">
                         SAVE 
                        </button>
                    </div>
                </form>
            </div>
            
        </div>
    );
}
export default AccountForm