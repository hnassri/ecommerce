import react from 'react'

const AccountForm = props =>{


    return(
       
          <form action="#" className="myaccount-form">
            <div className="myaccount-form-inner">
              <div className="single-input">
                <label>Email*</label>
                <input type="email" />
              </div>
              <div className="single-input">
                <label>Current Password(leave blank to leave
                  unchanged)</label>
                <input type="password" />
              </div>
              <div className="single-input">
                <label>New Password (leave blank to leave
                  unchanged)</label>
                <input type="password" />
              </div>
              <div className="single-input">
                <label>Confirm New Password</label>
                <input type="password" />
              </div>
              <div className="single-input">
                <button className="btn btn-custom-size lg-size btn-webshop-primary" type="submit">
                  <span>SAVE CHANGES</span>
                </button>
              </div>
            </div>
          </form>
         
   
    )
}
export default AccountForm