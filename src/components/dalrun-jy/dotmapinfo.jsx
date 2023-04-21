import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from 'axios';

const DotMapInfo = () => {
  const [rankList, setrankList] = useState([]);
  const [ranMykList, setMyrankList] = useState([]);

  function getCrewRank() {
    axios.get("http://localhost:3000/getCrewRank")
      .then(function (resp) {
        setrankList(resp.data);
  
      }).catch(function (err) {
        alert(err);
      })
  };

  function getMyCrewRank() {
    axios.get("http://localhost:3000/getMyCrewRank",{params:{'crewName':'ACTIVECREW' }})
      .then(function (resp) {
        setMyrankList(resp.data);

      }).catch(function (err) {
        alert(err);
      })
  };

  function sendDonation() {

    const score= document.getElementById("pointselect").value;
    console.log(score);
    axios.get("http://localhost:3000/sendDonation",{params:{'id':'아이디','score':score,'crewname':'ACTIVECREW'}})
      .then(function (resp) {
        console.log(resp.data)
        if(resp.data===true){
          alert("전송완료");
        }else{
          alert("전송미완료");

        }

      }).catch(function (err) {
        alert(err);
      })
  };
  
  
  useEffect(() => {
    getCrewRank();
    getMyCrewRank();
  }, []);

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

          {rankList.map((val, i) => (
            <div className="ptf-pricing-table__description" key={i}>
              <h6 style={{ display: 'inline' }}>{i + 1}등 : {val.crewname} </h6>
              <div style={{ display: 'inline-block', width: '40px', height: '15px', backgroundColor: `${val.crewcolor}` }}></div>
            </div>


          ))}
          <div className="ptf-pricing-table__description">
            <h6 style={{ display: 'inline' }}>나의 크루 등수 :{ranMykList.myrank} 등 </h6>
            <div style={{ display: 'inline-block', width: '40px', height: '15px', backgroundColor: `${ranMykList.crewcolor}` }}>
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
            <h6 style={{ display: 'inline' }}>나의 크루 : {ranMykList.crewname} </h6>
            <div style={{ display: 'inline-block', width: '40px', height: '15px', backgroundColor: `${ranMykList.crewcolor}` }}></div>
            <h6>나의 포인트 : {'로그인 후 적용'}</h6>
          </div>

          <div className="ptf-pricing-table__description">
            <h4>나의 크루 포인트: {ranMykList.crewscore} point</h4>
          </div>


          <div className="ptf-pricing-table__action">
            {/* <!--Button--> */}
            <select id="pointselect" style={{maxWidth:'120px'}} >
            <option value="500">500 point</option>
            <option value="1000">1000 point </option>
            <option value="5000">5000 point</option>
            <option value="10000">10000 point</option>
          </select><br/>

            <button onClick={sendDonation}> 기부하기 </button>
          </div>
        </div>
      </div>





    </>
  );
};

export default DotMapInfo;
