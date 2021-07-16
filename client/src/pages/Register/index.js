import React, { Component ,useState} from "react"
import axios from "axios"


const Register =props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
 
      
  
      
    const handleSubmit = async e => {
          
        e.preventDefault();

        const user={
          email:email,
          password:password
        }
        if(password.length<6){
            alert(" Mot de passe trop court");
        }
        else if(confirmpassword!=password){
            alert("Les mots de passe sont pas identiques");
        }
        else{
        var bodyFormData = new FormData();
        bodyFormData.append('email', email);
        bodyFormData.append('password', password);

        axios({
            method: "post",
            url: "http://127.0.0.1:8000/api/v1/register",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (response) {
              console.log(response);
            });
        }
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
                    <div className="form-group">
                        <input
                            type="confirmpassword"
                            className="form-control"
                            name="confirmpassword"
                            placeholder="Confirmpassword"
                            onChange={event => setconfirmpassword(event.target.value)}
                        />
                    </div>
                    <br />
                    <div>
                        <button className="btn btn-Register btn-outline-success" type="submit">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
      
export default Register