import React from "react";
import baby from "./baby.png";
import child from "./child.png";
import runner from "./runner.png";
import master from "./master.png";


const RatingImg = () => {

  return (

    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ margin: '20px' }}>
        <img src={baby} style={{ width: '300px', height: '250px' }} />
        <div style={{ marginTop: '10px', textAlign: 'center' }}>걸음마</div>
      </div>
      <div style={{ margin: '20px' }}>
        <img src={child} style={{ width: '300px', height: '250px' }} />
        <div style={{ marginTop: '10px', textAlign: 'center' }}>런니니</div>
      </div>
      <div style={{ margin: '20px' }}>
        <img src={runner} style={{ width: '300px', height: '250px' }} />
        <div style={{ marginTop: '10px', textAlign: 'center' }}>러너</div>
      </div>
      <div style={{ margin: '20px' }}>
        <img src={master} style={{ width: '300px', height: '250px' }} />
        <div style={{ marginTop: '10px', textAlign: 'center' }}>마라토너</div>
      </div>
  </div>
  );
      
};

export default RatingImg;
