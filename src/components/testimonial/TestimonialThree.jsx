import React from "react";
import Slider from "react-slick";

const testimonialContent = [
  {
    descriptions: ` “Bruno was a real pleasure to work with and we look forward to
    working with him again. He’s definitely the kind of designer you
    can trust with a project from start to finish. Great services &
    Recommended!”`,
    name: "Jurgen Kloop",
    designation: "Product Management",
    companyName: "Google Inc",
    webLink: "https://www.google.com/",
  },
  {
    descriptions: ` “Bruno was a real pleasure to work with and we look forward to
    working with him again. He’s definitely the kind of designer you
    can trust with a project from start to finish. Great services &
    Recommended!”`,
    name: "Jurgen Kloop",
    designation: "Product Management",
    companyName: "Google Inc",
    webLink: "https://www.google.com/",
  },
  {
    descriptions: ` “Bruno was a real pleasure to work with and we look forward to
    working with him again. He’s definitely the kind of designer you
    can trust with a project from start to finish. Great services &
    Recommended!”`,
    name: "Jurgen Kloop",
    designation: "Product Management",
    companyName: "Google Inc",
    webLink: "https://www.google.com/",
  },
];

const TestimonialThree = () => {
  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <>
      <Slider
        {...settings}
        className="arrow-none testimonial-pagination--style-bottom"
      >
        {testimonialContent.map((val, i) => (
          <div
            className="ptf-testimonial ptf-testimonial--style-1 space-80"
            key={i}
          >
            <div className="ptf-testimonial__content">
              <p>{val.descriptions}</p>
            </div>
            <div className="ptf-testimonial__meta">
              <h6 className="ptf-testimonial__author">{val.name}</h6>
              <div className="ptf-testimonial__info">
                <span>{val.designation}</span> at{" "}
                <a href={val.webLink} target="_blank" rel="noopener noreferrer">
                  {val.companyName}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default TestimonialThree;
