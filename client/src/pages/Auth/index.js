import react from 'react';
import './style.css';
import SetingUpFrom from '../../components/From/SignUpForm';
import LoginFrom from '../../components/From/LoginForm';
import Footer from '../../components/CommonComponents/Footer';

const Auth = ()=>{
    return (

        <div class="main-wrapper">
<main className="main-content">
  <div className="breadcrumb-area breadcrumb-height" >
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-12">
          <div className="breadcrumb-item">
            <h2 className="breadcrumb-heading">Login &amp; Register Page</h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Login | Register</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="login-register-area section-space-y-axis-100">
    <div className="container">
      <div className="row">
          <SetingUpFrom/>
        <Footer/>
      </div>
    </div>
  </div>
</main>
</div>


    )
}
export default Auth;

