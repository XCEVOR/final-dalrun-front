import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from 'axios';

const DotMapInfo = () => {
  const [rankList, setrankList] = useState([]);
  const [ranMykList, setMyrankList] = useState([]);

  // 로그인 정보
  const [login,setLogin]=useState(true);
  const [my,setMy]=useState(0);

  function getCrewRank() {
    axios.get("http://localhost:3000/getCrewRank")
      .then(function (resp) {
        setrankList(resp.data);
  
      }).catch(function (err) {
        alert(err);
      })
  };

  function getMyCrewRank() {
    axios.get("http://localhost:3000/getMyCrewRank",{params:{'crewName':'MYCREW' }})
      .then(function (resp) {
        setMyrankList(resp.data);

      }).catch(function (err) {
        
      })
  };

  function sendDonation() {

    const score= document.getElementById("pointselect").value;
    if(my>=score){
    axios.get("http://localhost:3000/sendDonation",{params:{'id':'아이디','score':score,'crewname':'MYCREW'}})
      .then(function (resp) {
        console.log(resp.data)
        if(resp.data===true){
          alert("전송완료");
          getCrewRank();
          getMyCrewRank();
        
        }else{
          alert("전송미완료");

        }

      }).catch(function (err) {
        alert(err);
      })
    }};
  
  function donationAlet(){
    
    const score= document.getElementById("pointselect").value;
    if(my>=score){
      document.getElementById('sendBtn').removeAttribute('disabled');
      document.getElementById('donationalert').style.display='none';
    }else{
      document.getElementById('sendBtn').setAttribute('disabled',"disabled");
      document.getElementById('donationalert').style.display='block';
    }
  }
 
  
  
  useEffect(() => {
    getCrewRank();
    getMyCrewRank();
    setMy(1000);
   
  }, []);

  useEffect(()=>{
    if(login&& rankList.length>0){
      console.log(ranMykList);
      if(ranMykList.crewname==null){
        document.getElementById("infologoutform").style.display='none';
        document.getElementById("infocrewform").style.display='block';
      } else{
      document.getElementById("infologoutform").style.display='none';
      document.getElementById("infocrewform").style.display='none';
      document.getElementById("infologinform").style.display='block';
      document.getElementById("infologinform2").style.display='block';
      }}
  },[rankList,ranMykList,my])


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
          <div style={{display:'none'}}  id="infologinform" className="ptf-pricing-table__description">
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

          <div id="infologoutform" style={{marginTop:'150px'}} className="ptf-pricing-table__description">

            <h6 style={{marginBottom:'40px'}}>해당 정보는 로그인이 필요합니다.</h6>
            <span ><a href="/login" style={{ textDecoration: 'underline', color: '#0d6efd', fontSize: '15px', padding: '0.5rem' }}>로그인 하기</a></span>


          </div>

          <div id="infocrewform" style={{marginTop:'150px',display:'none'}} className="ptf-pricing-table__description">

            <h6 style={{marginBottom:'40px'}}>해당 정보는 크루 가입이 필요합니다.</h6>
            <span ><a href="/login" style={{ textDecoration: 'underline', color: '#0d6efd', fontSize: '15px', padding: '0.5rem' }}>크루 가입하러 가기</a></span>


          </div>
   
          <div id="infologinform2" style={{display:'none'}} >
          <div className="ptf-pricing-table__content">
            <h6 style={{ display: 'inline' }}>나의 크루 : {ranMykList.crewname} </h6>
            <div style={{ display: 'inline-block', width: '40px', height: '15px', backgroundColor: `${ranMykList.crewcolor}` }}></div>
            <h6>나의 포인트 : {my}</h6>
          </div>

          <div className="ptf-pricing-table__description">
            <h4>나의 크루 포인트: {ranMykList.crewscore} point</h4>
          </div>


          <div  className="ptf-pricing-table__action">
            {/* <!--Button--> */}
            <select id="pointselect" style={{maxWidth:'120px'}} onChange={donationAlet}>
            <option value="500">500 point</option>
            <option value="1000">1000 point </option>
            <option value="5000">5000 point</option>
            <option value="10000">10000 point</option>
          </select><br/>
            <button id="sendBtn" onClick={sendDonation} > 기부하기 </button>
            <p id="donationalert" style={{color:'red',display:'none'}}>💡 포인트가 부족합니다! </p>
          </div>
        </div>

        </div>
      </div>





    </>
  );
};

export default DotMapInfo;
