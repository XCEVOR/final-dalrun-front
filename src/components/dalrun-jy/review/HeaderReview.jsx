
import NaverMapView from "./NaverMapview";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const HeaderReview = () => {
  const [compList,setCompList]=useState([]);

  
  function getAllShoeListThisMonth(){

    axios.get("http://localhost:3000/getAllShoeListThisMonth")
    .then(function(resp){
      console.log(resp.data)
        setCompList(resp.data);
    }).catch(function(err){
        alert(err);
    })
  }

  
  useEffect(() => {
    
    getAllShoeListThisMonth();
  
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
                <Link className="ptf-work__link" to={`/review-detail/${val.srSeq}`}></Link>
              <img
                src={`assets/img/dalrun-jy/${val.srimage}`}
                alt={val.categories}
                loading="lazy"
                style={{ position: 'relative',height:'200px',width:'200px'}}
              />
        
                </div>
                <div className="ptf-post__content">
                  <header style={{marginTop:'15px'}}>
                    <p className="ptf-post__title">
                      <Link to={`/review-detail/${val.srSeq}`}>{val.srTitle}</Link>
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

export default HeaderReview;
