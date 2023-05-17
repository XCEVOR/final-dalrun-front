import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import axios from 'axios';

const DotMapInfo = (props) => {
  const [rankList, setrankList] = useState([]);
  //const [mycrewinfo, setMycrewinfo] = useState(props.mycrewinfo);
  //const [logininfo, setLogininfo] = useState([]);

 
  // 로그인 정보
  // const [login,setLogin]=useState([]);
  const [loginTF,setLoginTF]=useState(false);

  function getCrewRank() {
    axios.get("/getCrewRank")
      .then(function (resp) {
        setrankList(resp.data);
  
      }).catch(function (err) {   
        alert(err);
      })
  };
  // 나의 크루 정보 가져오기
  function getMyCrewinfo(crewSeq) { 
    axios.get("/getMyCrewinfo",{params:{'crewSeq':crewSeq }})
      .then(function (resp) {
        //setMycrewinfo(resp.data);
        props.Changemycrewinfo(resp.data);
      }).catch(function (err) {
        
      })
  };
  // function sendDonation() {
  //   const score= document.getElementById("pointselect").value;
  //   if(parseInt(props.login.point)>= parseInt(score)){
  //   axios.get("/sendDonation",{params:{'id':props.login.memId,'score':score,'crewSeq':props.login.crewSeq}})
  //     .then(function (resp) {
       
  //       if(resp.data===true){
  //         alert("전송완료");
          
  //         let logininfo= props.login;

          
  //         logininfo.point= logininfo.point- parseInt(score)
          
  //         console.log("after",logininfo);
  //         localStorage.setItem("login", JSON.stringify(logininfo));
  //         props.Changelogininfo(JSON.stringify(logininfo));
          
  //         loading();
  //       }else{
  //         alert("전송미완료");

  //       }

  //     }).catch(function (err) {
  //       alert(err);
  //     })
  //   }};
  
  // function donationAlet(){
    
  //   const score= document.getElementById("pointselect").value;
  //   if(score!=='none'){
  //   if(parseInt(props.login.point)>=parseInt(score)){
  //     document.getElementById('sendBtn').removeAttribute('disabled');
  //     document.getElementById('donationalert').style.display='none';
  //   }else{
  //     document.getElementById('sendBtn').setAttribute('disabled',"disabled");
  //     document.getElementById('donationalert').style.display='block';
  //   }
  // }else{
  //   document.getElementById('donationalert').style.display='none';
  // }
  // }
  function loading(){
    const logindata=JSON.parse(localStorage.getItem('login'));
    if(logindata){
      props.Changelogininfo(logindata)
      getMyCrewinfo(JSON.parse(localStorage.getItem('login')).crewSeq);
      setLoginTF(true);
      
    }
  }
  
  
  useEffect(() => {
    getCrewRank();
    loading();
    console.log("dtopmapinfo=====\n",props.login);
  }, []);
  
  useEffect(()=>{
   
    if(loginTF){
   
      if(props.mycrewinfo.length !== 0){
      document.getElementById("infologoutform").style.display='none';
      document.getElementById("infocrewform").style.display='none';
      document.getElementById("infologinform").style.display='block';
      document.getElementById("infologinform2").style.display='block';
      } else{
      document.getElementById("infologoutform").style.display='none';
      document.getElementById("infocrewform").style.display='block';
      }}
  },[rankList])

  
  return (
    <>
      {/* ranking */}
      <div className="col-xl-4 col-lg-6">
        {/* <!--Animated Block--> */}

        {/* <!--Pricing Table--> */}
        <div className="ptf-pricing-table h-100">

          <div className="ptf-pricing-table__header">
            <h3>Space Ranking</h3>
          </div>

          {rankList.map((val, i) => (
            <div className="ptf-pricing-table__description" key={i}>
              <h6 style={{ display: 'inline' }}>{i + 1}등 : {val.crewName} </h6>
              <div style={{ display: 'inline-block', width: '40px', height: '15px', backgroundColor: `${val.crewcolor}` }}></div>
              <h6 style={{ display: 'inline'}}> ({val.groundCount})  </h6>
              
            </div>


          ))}
          <div style={{display:'none'}}  id="infologinform" className="ptf-pricing-table__description">
            <h6 style={{ display: 'inline' }}> 나의 크루 </h6>
            <div style={{ display: 'inline-block', width: '40px', height: '15px', backgroundColor: `${props.mycrewinfo.crewcolor}` }}>
            </div>
            <h6 style={{ display: 'inline' }}> ({props.mycrewinfo.groundCount})   </h6>
          </div>

        </div>
      </div>


      {/* 나의 크루 정보 */}
      <div className="col-xl-8 col-lg-6">
        {/* <!--Animated Block--> */}

        {/* <!--Pricing Table--> */}
        <div className="ptf-pricing-table h-100">
          <div className="ptf-pricing-table__header">
            <h3>나의 정보</h3>
          </div>

          <div id="infologoutform" style={{marginTop:'150px'}} className="ptf-pricing-table__description">

            <h6 style={{marginBottom:'40px'}}>해당 정보는 로그인이 필요합니다.</h6>
            <span ><a href="/login" style={{ textDecoration: 'underline', color: '#0d6efd', fontSize: '15px', padding: '0.5rem' }}>로그인 하기</a></span>


          </div>

          <div id="infocrewform" style={{marginTop:'150px',display:'none'}} className="ptf-pricing-table__description">
         
            <h6>나의 포인트 : { props.login.point}</h6>
            <br/>
            <h6 style={{marginBottom:'40px'}}>상세 정보는 크루 가입이 필요합니다.</h6>
            <span ><a href="/crewBbsMain" style={{ textDecoration: 'underline', color: '#0d6efd', fontSize: '15px', padding: '0.5rem' }}>크루 가입하러 가기</a></span>


          </div>
   
          <div id="infologinform2" style={{display:'none'}} >
          <div className="ptf-pricing-table__content">
            <h6 style={{ display: 'inline' }}>나의 크루 : {props.mycrewinfo.crewName} </h6>
            <div style={{ display: 'inline-block', width: '40px', height: '15px', backgroundColor: `${props.mycrewinfo.crewcolor}` }}></div>
          </div>
          <h6>나의 포인트 : { props.login.point}</h6>
         
            <hr></hr>
          <div className="ptf-pricing-table__content">
            <div className="row">
            <div className="col-xl-3">
              {
                props.mycrewinfo.length !==0 &&
              <img      
              src={`${process.env.REACT_APP_API_URL}/dalrun-yr/crewImg/${props.mycrewinfo.crewImg.split('/')[0]}`}
            style={{borderRadius:'30%'}}
              >
              </img>
              }
            </div>
            <div className="col-xl-6">
            <h6>나의 크루 포인트: {props.mycrewinfo.crewTotalScore} point</h6>
            <br></br>
            <h6> 나의 크루 레벨  {props.mycrewinfo.crewLevel}</h6>
            <br></br>
            <h6> 나의 크루 보유 Ground  ({props.mycrewinfo.groundCount})</h6>
              </div>
            
            </div>
          </div>
          

          {/* <div  className="ptf-pricing-table__action">
         
            <select id="pointselect" style={{maxWidth:'200px'}} onChange={donationAlet}>
            <option value="none">point를 선택하세요</option>
            <option value="500">500 point</option>
            <option value="1000">1000 point </option>
            <option value="5000">5000 point</option>
            <option value="10000">10000 point</option>
          </select><br/>
            <button id="sendBtn" onClick={sendDonation} > 기부하기 </button>
            <p id="donationalert" style={{color:'red',display:'none'}}>💡 포인트가 부족합니다! </p>
          </div> */}
        </div>

        </div>
      </div>





    </>
  );
};

export default DotMapInfo;
