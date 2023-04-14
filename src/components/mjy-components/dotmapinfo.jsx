import React from "react";

import { Link } from "react-router-dom";

const DotMapInfo = () => {
  return (
    <>
       {/* ranking */}
      <div className="col-xl-4 col-lg-6">
        {/* <!--Animated Block--> */}
      
          {/* <!--Pricing Table--> */}
          <div className="ptf-pricing-table h-100">
           
            <div className="ptf-pricing-table__header">
              <h1>Ranking</h1>
            </div>
            
            <div className="ptf-pricing-table__description">
             <h3>1등 : 광교</h3>
            </div>
            <div className="ptf-pricing-table__description">
             <h3>2등 : 판교</h3>
            </div>
            <div className="ptf-pricing-table__description">
             <h3>3등 : 장교</h3>
            </div>
            
            <div className="ptf-pricing-table__action">
              {/* <!--Button--> */}
             
            </div>
          </div>
        </div>


        {/* 나의 크루 정보 */}
        <div className="col-xl-4 col-lg-6">
        {/* <!--Animated Block--> */}
      
          {/* <!--Pricing Table--> */}
          <div className="ptf-pricing-table h-100">
           
            <div className="ptf-pricing-table__header">
              <h1>나의 크루 정보</h1>
            </div>
  
            <div className="ptf-pricing-table__content">
              <h2>나의 크루 : 주주클럽</h2>
              <h2>나의 포인트 : 1000 point</h2>
            </div>
            <div className="ptf-pricing-table__action">
              {/* <!--Button--> */}
              <button className="ptf-submit-button ptf-submit-button--style-2">
            [기부하기]
          
        </button>
            </div>
          </div>
      </div>

        {/* 나의 크루 정보 2 */}

        <div className="col-xl-4 col-lg-6">
        {/* <!--Animated Block--> */}
      
          {/* <!--Pricing Table--> */}
          <div className="ptf-pricing-table h-100">
           
            <div className="ptf-pricing-table__header">
              <h4 className="ptf-pricing-table__title">value</h4>
            </div>
            
            <div className="ptf-pricing-table__description">
            value
            </div>
            <div className="ptf-pricing-table__content">
              
            </div>
            <div className="ptf-pricing-table__action">
              {/* <!--Button--> */}
             
            </div>
          </div>
        </div>
 

  </>
  );
};

export default DotMapInfo;
