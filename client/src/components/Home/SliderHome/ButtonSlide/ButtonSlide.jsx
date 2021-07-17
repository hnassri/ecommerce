import react from 'react';
import './index.css';

const ButtOnSlide = ()=>{
    return(
        <div className="slide-button-wrap">
        <div className="slide-button-prev">
          <i className="pe-7s-angle-left" />
        </div>
        <div className="slide-button-next">
          <i className="pe-7s-angle-right" />
        </div>
      </div>
    )


}
export default ButtOnSlide;