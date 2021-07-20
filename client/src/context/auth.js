import React, { useState, useEffect} from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { Link } from "react-router-dom";

const AuthContext = React.createContext();
function getUser() {
    const token = localStorage.getItem("token");
    return token ? jwt_decode(token) : null;
}
const AuthProvider = (props) => {
    const [user, setUser] = useState(getUser());
    useEffect(() => {
        //setUser(useUser());    
        
        // Pull saved login state from localStorage / AsyncStorage
      }, []);

    const login = (email, password) => {
        let formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        const header = {
            "Content-Type": "multipart/form-data"
        }
        axios.post("http://206.81.25.252:8000/login", formData, header)
            .then(res => {
                if(res.data.success){
                    const data = res.data;
                    localStorage.setItem("token", data.token);
                }
                setUser(getUser());
            })
            .catch(e => {
                console.log(e.response.data.message);
            })
       
    }

    const register = (email, password) => {
        let formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        const header = {
            "Content-Type": "multipart/form-data"
        }
        axios.post("http://206.81.25.252:8000/api/v1/register", formData, header)
            .then(res => {
                window.location.href = "/login";
            })
            .catch(e => {
                console.log(e.response);
            })
       
    }
  
    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };
  
    const authContextValue = {
      login,
      user,
      logout,
      register
    };
  
    return <AuthContext.Provider value={authContextValue} {...props} />;
  };
  
  const useAuth = () => React.useContext(AuthContext);
  
  export { AuthProvider, useAuth };