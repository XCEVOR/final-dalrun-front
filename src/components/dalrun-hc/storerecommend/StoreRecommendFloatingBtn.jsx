import React from 'react';

const StoreRecommendFloatingBtn = () => {

  const handleClick = () => {
    // window.open("https://example.com", "_blank");
  }

  return (
    <button 
      style={{
        position: 'fixed',
        top: '320px',
        right: '50px',
        zIndex: "9999"
      }}
      onClick={handleClick}
    >
      지금 구입
    </button>
  );
}

export default StoreRecommendFloatingBtn;
