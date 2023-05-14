import React from 'react';
import { Link } from 'react-router-dom';

const StoreRecommendFloatingBtn = (props) => {

  const handleClick = () => {
    // window.open("https://example.com", "_blank");
  }

  return (
    <Link to={`/store-details/${props.productCode}`} rel="noopener noreferrer">
        <button 
        style={{
            position: 'fixed',
            top: '320px',
            right: '50px',
            zIndex: "9999"
        }}
        onClick={handleClick}
        >
        {props.productCode} // 지금 바로 구입
        </button>
    </Link>
                    
  );
}

export default StoreRecommendFloatingBtn;
