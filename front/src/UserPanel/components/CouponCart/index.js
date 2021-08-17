import axios from "../../../axios/axios";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb"

const CouponCart = () => {
    
    return (
        <form>
            <div className="row">
                <div className="col-12">
                    <div className="coupon-all">
                        <div className="coupon">
                            <input id="coupon_code" className="input-text" name="coupon_code" defaultValue placeholder="Code promo" type="text" />
                            <input className="button mt-xxs-30" name="apply_coupon" defaultValue="Appliquer" type="submit" />
                        </div>
                    </div>
                </div>
            </div>
        </form>

    )
}

export default CouponCart;