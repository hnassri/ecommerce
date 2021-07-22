import React, { Component ,useState} from "react"

const AccountHeader = props =>{

    return(
    <div className="breadcrumb-area breadcrumb-height" data-bg-image="assets/images/breadcrumb/bg/1-1-1919x388.jpg">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-12">
              <div className="breadcrumb-item">
                <h2 className="breadcrumb-heading">My Account Page</h2>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>My Account</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

} 

export default AccountHeader;