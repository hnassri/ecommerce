import React, { useState, useEffect} from "react";
import jwt_decode from "jwt-decode";
import axios from "../axios/axios";

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
    const token = localStorage.getItem("token");

    const login = (email, password, props) => {
        let formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        const header = {
            "Content-Type": "multipart/form-data"
        }
        axios.post("/login", formData, header)
            .then(res => {
                if(res.data.success){
                    const data = res.data;
                    localStorage.setItem("token", data.token);
                    props.history.push("/");
                }
                setUser(getUser());
            })
            .catch(e => {
                console.log(e);
            })
    }

    const register = (email, password, props) => {
        let formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        const header = {
            "Content-Type": "multipart/form-data"
        }
        axios.post("/api/v1/register", formData, header)
            .then(res => {
                if(res.data.success === true){
                    props.history.push(`/login`);
                }
            })
            .catch(e => {
                console.log(e);
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
        register,
        token
    };
  
    return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };