import React from "react";
import { Link } from "react-router-dom";
const teamContent = [
  {
    delayAnimation: "0",
    img: "shop",
    title: "스토어",
    link: ''

  },
  {
    delayAnimation: "100",
    img: "diary",
    title: "러닝 다이어리",
    link: ''

  },
  {
    delayAnimation: "200",
    img: "review",
    title: "러닝화 리뷰",
    link: ''

  },
  {
    delayAnimation: "300",
    img: "competition",
    title: "대회 신청",
    link: ''

  },
  {
    delayAnimation: "0",
    img: "course",
    title: "러닝 코스",
    link: ''

  },
  {
    delayAnimation: "100",
    img: "qna",
    title: "QnA",
    link: ''

  },
  {
    delayAnimation: "100",
    img: "crew",
    title: "크루 모집",
    link: ''

  },
  {
    delayAnimation: "100",
    img: "mypage",
    title: "마이페이지",
    link: ''

  },

];

const TeammainPage = () => {
  return (
    <>
      {teamContent.map((val, i) => (
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          {/* <!--Team Member--> */}
          <div className="ptf-team-member ptf-team-member--has-effect">
            <div className="ptf-team-member__avatar">
              <div className="shadow-effect"></div>
              <Link to={`/${val.link}`}>
                {" "}
                <img
                  src={`assets/img/dalrun-jy/${val.img}.png`}
                  alt={val.title}
                  loading="lazy"
                />
              </Link>
            </div>
            <div className="ptf-team-member__content">
              <h6 className="ptf-team-member__name">
                <a href="#">{val.title}</a>
              </h6>

            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeammainPage;
