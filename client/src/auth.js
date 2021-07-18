import React, { Component ,useState} from "react"
import axios from "axios"
import { Link,Redirect,useHistory} from "react-router-dom";

const Login = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState(false);
    
 
    const handleSubmit = async e => {
          
        e.preventDefault();

        const user = {
          email: email,
          password: password
        }

        if(password.length < 6){
            alert(" Mot de passe trop court");
        }
        else{
        var bodyFormData = new FormData();
        bodyFormData.append('email', email);
        bodyFormData.append('password', password);

        axios({
            method: "post",
            url: "http://127.0.0.1:8000/login",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(function ( response ) {
              if(response.data.success === true && response.data.token != null ){
                  localStorage.setItem("auth", response.data.token);
                  setConfirm(true);
              };
           
            })
            .catch(function (e) {
             alert(e.response.data.message);
            });
        }
    }
    if(confirm === true){
        return <Redirect to="/" />   
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
                            name="email"
                            placeholder="email"
                            onChange={event => setEmail(event.target.value)}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="password"
                            onChange={event => setPassword(event.target.value)}
                        />
                    </div>
                    <br />
                    <div>
                        <button className="btn btn-login btn-outline-success" type="submit">
                            Login
                        </button>
                    </div>
                </form>
            </div>
            
        </div>
    );
}
      
export default Login