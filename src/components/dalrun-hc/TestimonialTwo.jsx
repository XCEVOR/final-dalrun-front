import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const testimonialContent = [
  {
    avatar: "twitter-avatar",
    name: "Thiago Alcantara",
    email: "@thiago.lfc",
    hightlightText: "@moonex",
    date: "15 Dec, 2022",
    description: `a studio with passionate, profressional &
    full creativity. Much more things that i’m expect. Really
    awesome & satisfied, alway recommended!`,

    img: "work-1",
    categorie: "UI/UX",
    title: "Taskly Dashboard",

    routerPath: "/store-details",
  },
  {
    avatar: "twitter-avatar-2",
    name: "Laura Lowrence",
    email: "@laura.cubichotel",
    hightlightText: "@awesome",
    date: "24 Dec, 2022",
    description: ` I don’t know what else to say, this is something that you
    haven’t seen before. Unique design, impressive & outstanding
    support.`,

    img: "work-2",
    categorie: "Product",
    title: "Film & Art Festival",

    routerPath: "/store-details",
  },
  {
    avatar: "comment-avatar-1",
    name: "Laura Lowrence",
    email: "@laura.cubichotel",
    hightlightText: "@design",
    date: "24 Dec, 2022",
    description: ` This is something that you
    haven’t seen before. Unique design, impressive & outstanding
    support. I don’t know what else to say, `,

    img: "work-3",
    categorie: "Branding, Packaging",
    title: "Dark Wishky Wine",

    routerPath: "/store-details",
  },
  {
    avatar: "twitter-avatar",
    name: "Thiago Alcantara",
    email: "@thiago.lfc",
    hightlightText: "@moonex",
    date: "15 Dec, 2022",
    description: `a studio with passionate, profressional &
    full creativity. Much more things that i’m expect. Really
    awesome & satisfied, alway recommended!`,

    img: "work-4",
    categorie: "UI/UX",
    title: "Taskly Dashboard",

    routerPath: "/store-details",
  },
  {
    avatar: "twitter-avatar-2",
    name: "Laura Lowrence",
    email: "@laura.cubichotel",
    hightlightText: "@awesome",
    date: "24 Dec, 2022",
    description: ` I don’t know what else to say, this is something that you
    haven’t seen before. Unique design, impressive & outstanding
    support.`,

    img: "work-5",
    categorie: "Product",
    title: "Film & Art Festival",

    routerPath: "/store-details",
  },
  {
    avatar: "comment-avatar-1",
    name: "Laura Lowrence",
    email: "@laura.cubichotel",
    hightlightText: "@design",
    date: "24 Dec, 2022",
    description: ` This is something that you
    haven’t seen before. Unique design, impressive & outstanding
    support. I don’t know what else to say, `,

    img: "work-6",
    categorie: "Branding, Packaging",
    title: "Dark Wishky Wine",

    routerPath: "/store-details",
  },
];

const TestimonialTwo = () => {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings} className="arrow-none">
        {testimonialContent.map((val, i) => (
          <div className="swiper-slide" key={i}>


            {/* <!--Portfolio Item--> */}
            <article className="ptf-work ptf-work--style-6">


              <div className="ptf-work__media">
                <Link to={val.routerPath} rel="noopener noreferrer">
                <img
                  src={`assets/img/dalrun-hc/${val.img}.jpg`}
                  // src={`assets/img/home/studio/${val.img}.png`}
                  alt={val.title}
                  loading="lazy"
                />

                  {val.name}
                </Link>
              </div>

{/* 
              <Link className="ptf-work__meta" to="/works-showcase">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  style={{ height: "1em" }}
                  viewBox="0 0 17 17"
                >
                  
                  <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
                </svg>
                <div className="ptf-work__category">{val.categorie}</div>
                <h4 className="ptf-work__title">{val.title}</h4>
              </Link>
               */}
            </article>


{/* 
            <div
              className="ptf-twitter-review ptf-twitter-review--style-1"
              key={i}
            >
              <div className="ptf-twitter-review__header">
                <div className="ptf-twitter-review__avatar">
                  <img
                    src={`assets/img/root/${val.avatar}.png`}
                    alt="avatar"
                    loading="lazy"
                  />
                </div>
                <div className="ptf-twitter-review__meta">
                  <h6 className="ptf-twitter-review__author">{val.name}</h6>
                  <div className="ptf-twitter-review__info">
                    <a href="mailto:ibthemes21@gmail.com">{val.email}</a> -{" "}
                    {val.date}
                  </div>
                </div>
                <div className="ptf-twitter-review__icon">
                  <i className="socicon-twitter"></i>
                </div>
              </div>
              <div className="ptf-twitter-review__content">
                <p>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {val.hightlightText}
                  </a>{" "}
                  - {val.description}
                </p>
              </div>
            </div>
*/}
          </div>
        ))}
      </Slider>
    </>
  );
};

export default TestimonialTwo;
