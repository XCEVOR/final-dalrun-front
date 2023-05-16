import React from "react";
import babygirl from "./babygirl.png";
import man from "./man.png";
import student from "./student.png";
import king from "./king.png";


const RatingImg = () => {

  return (

    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ margin: '20px' }}>
        <img src={babygirl} style={{ width: '300px', height: '250px' }} />
        <div style={{ marginTop: '10px', textAlign: 'center' }}>걸음마</div>
      </div>
      <div style={{ margin: '20px' }}>
        <img src={student} style={{ width: '300px', height: '250px' }} />
        <div style={{ marginTop: '10px', textAlign: 'center' }}>런니니</div>
      </div>
      <div style={{ margin: '20px' }}>
        <img src={man} style={{ width: '300px', height: '250px' }} />
        <div style={{ marginTop: '10px', textAlign: 'center' }}>러너</div>
      </div>
      <div style={{ margin: '20px' }}>
        <img src={king} style={{ width: '300px', height: '250px' }} />
        <div style={{ marginTop: '10px', textAlign: 'center' }}>마라토너</div>
      </div>
  </div>
  );
      
};

export default RatingImg;
