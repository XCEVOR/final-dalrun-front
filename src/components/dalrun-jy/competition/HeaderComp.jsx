
import NaverMapView from "./NaverMapview";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const HeaderComp = () => {
  const [compList,setCompList]=useState([]);

  
  function getAllListThisMonth(){

    axios.get("http://localhost:3000/getAllListThisMonth")
    .then(function(resp){
      console.log(resp.data)
        setCompList(resp.data);
    }).catch(function(err){
        alert(err);
    })
  }
  
  function check(start,end){
    let todayDate =new Date();
    let today= todayDate.getFullYear()+"-"+
    ((todayDate.getMonth()+1)<10? '0'+(todayDate.getMonth()+1):(todayDate.getMonth()+1) )+"-"+
    ((todayDate.getDay()<10)?'0'+todayDate.getDay():todayDate.getDay());
    if(start<=today && today<=end){ // 접수중 
      return 1;
    }else if(today <end){ // 접수 예정
      return 2;
    }else{ // 접수 종료
      return 3;
  }
  }
  
  useEffect(() => {
    
    getAllListThisMonth();
  
  }, []);
  
  useEffect(()=>{
   
  },[compList])


  return (
    <>
      {compList.map((val, i) => (
        <div className="col-md" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={val.delayAnimation}
          >
            <div>
              {/* <!--Blog Post--> */}
              <article
                className="ptf-post ptf-post--style-1"
                style={{ "--ptf-post-header-indent": "3.125rem" }}
              >
                <div className="ptf-post__media">
                <Link className="ptf-work__link" to={`/competition-detail/${val.compSeq}`}></Link>
              <img
                // src={`assets/img/dalrun-jy/${val.compimage}`}
                src={`http://localhost:3000/dalrun-jy/competition/marathon_${val.compSeq}.jpg`}
                alt={val.categories}
                loading="lazy"
                style={{ position: 'relative',height:'200px',width:'200px'}}
              />
              {check(val.receiptStart,val.receiptEnd)===1 && <p style={{position:'absolute', zIndex:'1',top:'10px',background:'white',opacity:'0.8', borderRadius:'20px', color:'blue',padding:'10px',margin:'5px' }}>접수중</p>}
              {check(val.receiptStart,val.receiptEnd)===2 && <p style={{position:'absolute', zIndex:'1',top:'10px',background:'white',opacity:'0.8', borderRadius:'20px', color:'gray',padding:'10px',margin:'5px'}}>접수 예정</p>}
              {check(val.receiptStart,val.receiptEnd)===3 && <p style={{position:'absolute', zIndex:'1',top:'10px',background:'white',opacity:'0.8', borderRadius:'20px', color:'red',padding:'10px',margin:'5px'}}>접수 종료</p>}

           
                </div>
                <div className="ptf-post__content">
                  <header style={{marginTop:'15px'}}>
                    <p className="ptf-post__title">
                      <Link to={`/competition-detail/${val.compSeq}`}>{val.compTitle}</Link>
                    </p>
                  </header>
                </div>
              </article>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HeaderComp;
