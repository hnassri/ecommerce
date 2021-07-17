import React from 'react';
import '../style.css';


const SetingUpFrom = () => {

    return (
        <div className="col-lg-6">
            <form action="#">
                <div className="login-form">
                    <h4 className="login-title">Login</h4>
                    <div className="row">
                        <div className="col-lg-12">
                            <label>Email Address*</label>
                            <input type="email" placeholder="Email Address" />
                        </div>
                        <div className="col-lg-12">
                            <label>Password</label>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="col-md-8">
                            <div className="check-box">
                                <input type="checkbox" id="remember_me" />
                                <label htmlFor="remember_me">Remember me</label>
                            </div>
                        </div>
                        <div className="col-md-4 pt-1 mt-md-0">
                            <div className="forgotton-password_info">
                                <a href="#"> Forgotten pasward?</a>
                            </div>
                        </div>
                        <div className="col-lg-12 pt-5">
                            <button className="btn btn-custom-size lg-size btn-webshop-primary">Login</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default SetingUpFrom;