import React from "react";

import { Link } from "react-router-dom";
const crewrank = [
  {
    name: "1등 팀",
    score: '156522',
    color: '#6EE0FF'

  },
  {
    name: "2등 팀",
    score: '123300',
    color: '#6482FF'

  },
  {
    name: "3등 팀",
    score: '129805',
    color: '#E6749D'

  }

];



const mycrew = [
  {
    crewname: '달링달링',
    crewpoint: "102003",
    crewcolor: '#6EE5A3',
    crewrank: '100',
    mypoint: '3200'
  }
]
const DotMapInfo = () => {
  return (
    <>
      {/* ranking */}
      <div className="col-xl-4 col-lg-6">
        {/* <!--Animated Block--> */}

        {/* <!--Pricing Table--> */}
        <div className="ptf-pricing-table h-100">

          <div className="ptf-pricing-table__header">
            <h3>Ranking</h3>
          </div>

          {crewrank.map((val, i) => (
            <div className="ptf-pricing-table__description" key={i}>
              <h6 style={{ display: 'inline' }}>{i + 1}등 : {val.name} </h6>
              <div style={{ display: 'inline-block', width: '40px', height: '15px', backgroundColor: `${val.color}` }}></div>
            </div>


          ))}
          <div className="ptf-pricing-table__description">
            <h6 style={{ display: 'inline' }}>나의 크루 등수 : 100등 </h6>
            <div style={{ display: 'inline-block', width: '40px', height: '15px', backgroundColor: `${mycrew[0].crewcolor}` }}>
            </div>
          </div>

        </div>
      </div>


      {/* 나의 크루 정보 */}
      <div className="col-xl-8 col-lg-6">
        {/* <!--Animated Block--> */}

        {/* <!--Pricing Table--> */}
        <div className="ptf-pricing-table h-100">

          <div className="ptf-pricing-table__header">
            <h3>나의 크루 정보</h3>
          </div>

          <div className="ptf-pricing-table__content">
            <h6 style={{ display: 'inline' }}>나의 크루 : {mycrew[0].crewname} </h6>
            <div style={{ display: 'inline-block', width: '40px', height: '15px', backgroundColor: `${mycrew[0].crewcolor}` }}></div>
            <h6>나의 포인트 : {mycrew[0].mypoint}</h6>
          </div>

          <div className="ptf-pricing-table__description">
            <h4>나의 크루 포인트: {mycrew[0].crewpoint} point</h4>
          </div>


          <div className="ptf-pricing-table__action">
            {/* <!--Button--> */}
            <button> 기부하기 </button>
          </div>
        </div>
      </div>





    </>
  );
};

export default DotMapInfo;
