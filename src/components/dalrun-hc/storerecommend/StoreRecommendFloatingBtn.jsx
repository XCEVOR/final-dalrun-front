import React from 'react';
import { Link } from 'react-router-dom';

const StoreRecommendFloatingBtn = (props) => {

  const handleClick = () => {
    // window.open("https://example.com", "_blank");
  }

  return (
    <div>
      <Link to={`/store-details/${props.productCode}`} rel="noopener noreferrer">
          <button className='recomm_floating_btn' onClick={handleClick}>
            {/* <div>{props.productCode} </div> */}
            <div>Buy Now</div>
          </button>
      </Link>
    </div>          
  );
}

export default StoreRecommendFloatingBtn;
