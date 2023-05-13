import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

import Slider from "react-slick";


// 임시 데이터
const portfolioContent = [
  {
    img: "load",
    categorie: "서울",
    title: "여의도 한강공원",
    link: ''
  },
  {
    img: "load",
    categorie: "강원도",
    title: "감자 물방개공원",
    link: ''
  },
  {
    img: "load",
    categorie: "충청남도",
    title: "천안천",
    link: ''
  }
];

  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    centerPadding: "0",
    autoplay: false,
    centerMode: true,
    
  };

const Weekrun_mainPage = () => {

  const [courseList,setCourseList]=useState([]);


  // 종완님 구현 부탁드려요
  function getPopularCourse(){
    axios.get("http://localhost:3000/")
      .then(function (resp) {
        setCourseList(resp.data);

      }).catch(function (err) {
        alert(err);
      })

  }

  useEffect(() => {

   //getPopularCourse();
  
   

  }, []);

  useEffect(() => {

  });



  return (
    <div className="ptf-content-slider swiper-container slide-portfolio">
      <div className="swiper-wrapper">
        <Slider {...settings}>
          {/* <!--Portfolio Item--> */}
          {portfolioContent.map((item, i) => (
          // {courseList.map((item, i) => (

            <article className="ptf-work ptf-work--style-4" key={i}>
              <div className="ptf-work__media">
                <Link to={`/${item.link}`} className="ptf-work__link"></Link>


                <img
                  src={`assets/img/dalrun-jy/${item.img}.jpg`}
                  alt=""
                  
                />
              </div>
              <div className="ptf-work__meta" style={{marginLeft:'20px'}}>
                <div className="ptf-work__category">{item.categorie}</div>
                <h4 className="ptf-work__title" >
                  <Link to="/">{item.title}</Link>
                </h4>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Weekrun_mainPage;
