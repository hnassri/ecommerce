import react from 'react';
import './style.css';
import SetingUpFrom from '../../components/From/SignUpForm';
import LoginFrom from '../../components/From/LoginForm';
import Footer from '../../components/CommonComponents/Footer';
import Header from '../../components/CommonComponents/Header/Header';


const Auth = ()=>{
  const url = window.location.pathname;
  const login = url === "/" || url === "/login" ? true : false;
  const signup = url === "/signup" ? true : false;
    return (

        <div class="main-wrapper">
         
<main className="main-content">
  <div className="breadcrumb-area breadcrumb-height" >
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-12">
          <div className="breadcrumb-item">
            <h2 className="breadcrumb-heading">{login ? "Login" : signup ? "Register" : null} Page</h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>{login ? "Login" : signup ? "Register" : null} </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="login-register-area section-space-y-axis-100">
    <div className="container">
      <div className="row">
      {login ?
        <LoginFrom/> : 
        signup ? 
          <SetingUpFrom/> 
          : null
      } 
        
      </div>
    </div>
  </div>
</main>
</div>


    )
}
export default Auth;

