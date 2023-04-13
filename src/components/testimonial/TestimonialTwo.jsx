import React from "react";
import Slider from "react-slick";

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
          </div>
        ))}
      </Slider>
    </>
  );
};

export default TestimonialTwo;
