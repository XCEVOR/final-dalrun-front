import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

import Slider from "react-slick";


// 임시 데이터
const portfolioContent = [
  {
    img: "course1",
    categorie: "서울",
    title: "경복궁 돌담길",
    link: 'course?search=경복궁+돌담길',
  },
  {
    img: "course2",
    categorie: "강원도",
    title: "강릉 경포 호수",
    link: 'course?search=강릉+경포+호수',
  },
  {
    img: "course3",
    categorie: "제주특별자치제도",
    title: "사려니숲길",
    link: 'course?search=제주+사려니숲길',
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
    axios.get("http://localhost:3000/courseList", )
      .then(function (resp) {
        setCourseList(resp.data);

      }).catch(function (err) {
        alert(err);
      })

  }

  useEffect(() => {

   getPopularCourse();
  
   

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
                  src={`assets/img/dalrun-jw/${item.img}.jpg`}
                  alt={item.title}
                  style={{ width: '470px', height: '350px', objectFit: 'cover',
                  objectPosition: 'center'}}
                  
                />
              </div>
              <div className="ptf-work__meta" style={{marginLeft:'20px'}}>
                <div className="ptf-work__category">{item.categorie}</div>
                <h4 className="ptf-work__title" >
                  <Link to={`/${item.link}`}>{item.title}</Link>
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
