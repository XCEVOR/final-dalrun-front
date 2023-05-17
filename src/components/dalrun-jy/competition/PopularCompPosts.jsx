import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';



const PopularCompPosts = () => {

  const [popularList,setPopularList]=useState([]);

  
  function getPopularList(){

    axios.get("/getPopularList")
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

        <Link className="ptf-popular-post" to={`/competition-detail/${val.compSeq}`} key={i}>
          <div className="ptf-popular-post__number">{i+1}</div>
          <div className="ptf-popular-post__content">
            <span className="cat">{val.compLocal}</span>
            <h6>{val.compTitle}</h6>
          </div>
        </Link>
      ))}
    </>
  );
};

export default PopularCompPosts;
