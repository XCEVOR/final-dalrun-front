import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const CrewBbsData = [
  {
    img: "run4",
    date: "April 25, 2023",
    title: "자신만의 크루를 만들어 보세요!",
    descriptions: ` 크루를 만들면 들숨에 건강을 날숨에 재력을 얻을 수 있는 사실을 알고 계셨나요?`,
  },
  {
    img: "run5",
    date: "Dec 11, 2021",
    title: "The evolution of Swiss style in Interaction Design",
    descriptions: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna
        aliqua...`,
  },
  {
    img: "run9",
    date: "Dec 7, 2021",
    title: "The evolution of Swiss style in Interaction Design",
    descriptions: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna
        aliqua...`,
  },
];

const CrewBbsGridContent = () => {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="swiper-slide grid-slider">
        <Slider {...settings} className="arrow-none">
          {CrewBbsData.map((val, i) => (
            <div className="ptf-news-slide" key={i}>
              <div className="ptf-news-slide__media">
                <img
                  src={`assets/img/dalrun-pyr/${val.img}.jpg`}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="ptf-news-slide__content">
                <div className="ptf-news-slide__meta">
                  <span className="cat">달런달런</span>
                  <span className="date">{val.date}</span>
                </div>
                <h3 className="ptf-news-slide__title" 
                style={{color: `var(--ptf-accent-1)`}}>
                  {val.title}
                </h3>
                <div className="ptf-news-slide__excerpt">
                  <p>{val.descriptions}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default CrewBbsGridContent;
