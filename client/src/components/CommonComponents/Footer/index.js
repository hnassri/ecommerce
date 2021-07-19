import React from 'react';
import './style.css';

const Footer = ()=>{
    return(
       <div>
  <div className="footer-area" data-bg-image="/assets/images/footer/bg/1-1920x465.jpg">
    <div className="footer-top section-space-top-100 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer-widget-item">
              <div className="footer-widget-logo">
                <a href="index.html">
                  <img src="/assets/images/logo/dark.png" alt="Logo" />
                </a>
              </div>
              <p className="footer-widget-desc">Lorem ipsum dolor sit amet, consec adipisl elit, sed do eiusmod
                tempor
                <br />
                incidio ut labore et dolore magna.
              </p>
              <div className="social-link with-border">
                <ul>
                  <li>
                    <a href="#" data-tippy="Facebook" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tippy="Twitter" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tippy="Pinterest" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder">
                      <i className="fa fa-pinterest" />
                    </a>
                  </li>
                  <li>
                    <a href="#" data-tippy="Dribbble" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay={50} data-tippy-arrow="true" data-tippy-theme="sharpborder">
                      <i className="fa fa-dribbble" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 pt-40">
            <div className="footer-widget-item">
              <h3 className="footer-widget-title">Useful Links</h3>
              <ul className="footer-widget-list-item">
                <li>
                  <a href="#">About WebShop</a>
                </li>
                <li>
                  <a href="#">How to shop</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Log in</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 pt-40">
            <div className="footer-widget-item">
              <h3 className="footer-widget-title">My Account</h3>
              <ul className="footer-widget-list-item">
                <li>
                  <a href="#">Sign In</a>
                </li>
                <li>
                  <a href="#">View Cart</a>
                </li>
                <li>
                  <a href="#">My Wishlist</a>
                </li>
                <li>
                  <a href="#">Track My Order</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 pt-40">
            <div className="footer-widget-item">
              <h3 className="footer-widget-title">Our Service</h3>
              <ul className="footer-widget-list-item">
                <li>
                  <a href="#">Payment Methods</a>
                </li>
                <li>
                  <a href="#">Money Guarantee!</a>
                </li>
                <li>
                  <a href="#">Returns</a>
                </li>
                <li>
                  <a href="#">Shipping</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 pt-40">
            <div className="footer-contact-info">
              <h3 className="footer-widget-title">Got Question? Call Us</h3>
              <a className="number" href="tel://123-456-789">123 456 789</a>
              <div className="address">
                <ul>
                  <li>
                    Your Address Goes Here
                  </li>
                </ul>
              </div>
            </div>
            <div className="payment-method">
              <a href="#">
                <img src="assets/images/payment/1.png" alt="Payment Method" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="copyright">
              <span className="copyright-text">© 2021 Webshop Made with <i className="fa fa-heart text-danger" /> by
                <a href="https://www.epitech.eu/" rel="noopener" target="_blank">Web@cadémie</a> </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )


}
export default Footer;