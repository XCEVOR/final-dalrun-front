import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';



const PopularReviewPosts = () => {

  const [popularList,setPopularList]=useState([]);

  
  function getPopularList(){

    axios.get("http://localhost:3000/getPopularShoeList")
    .then(function(resp){
      console.log(resp.data)
      setPopularList(resp.data);
    }).catch(function(err){
        alert(err);
    })
  }

  useEffect(() => {
    
    getPopularList();
  
  }, []);
  
  useEffect(()=>{
   
  },[popularList])

  return (
    <>
      {popularList.map((val, i) => (

        <Link className="ptf-popular-post" to={`/review-detail/${val.srSeq}`} key={i}>
          <div className="ptf-popular-post__number">{i+1}</div>
          <div className="ptf-popular-post__content">
            <span className="cat">{val.srBrand}</span>
            <h6>{val.srTitle}</h6>
          </div>
        </Link>
      ))}
    </>
  );
};

export default PopularReviewPosts;
