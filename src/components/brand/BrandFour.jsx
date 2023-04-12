import React from "react";

const brandContent = [
  { dealyAnimation: "0", icon: "image-1", percentage: "90", title: "Figma" },
  { dealyAnimation: "100", icon: "image-2", percentage: "95", title: "Sketch" },
  {
    dealyAnimation: "200",
    icon: "image-3",
    percentage: "82",
    title: "Adobe XD",
  },
  {
    dealyAnimation: "300",
    icon: "image-4",
    percentage: "93",
    title: "InvisionApp",
  },
  {
    dealyAnimation: "400",
    icon: "image-5",
    percentage: "76",
    title: "Bootstrap",
  },
  {
    dealyAnimation: "500",
    icon: "image-6",
    percentage: "88",
    title: "HTML5/CSS",
  },
];

const BrandFour = () => {
  return (
    <>
      {brandContent.map((val, i) => (
        <div className="col-6 col-md-4 col-lg-2" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={val.dealyAnimation}
          >
            {/* <!--Advantage Box--> */}
            <div
              className="ptf-advantage-box"
              style={{ "--ptf-image-height": "90px" }}
            >
              <div className="ptf-advantage-box__content">
                <div className="ptf-advantage-box__image">
                  <img
                    src={`assets/img/root/advantages/${val.icon}.png`}
                    alt="Figma"
                    loading="lazy"
                  />
                </div>
                <div className="ptf-advantage-box__value">{val.percentage}</div>
              </div>
              <h6 className="ptf-advantage-box__title">{val.title}</h6>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BrandFour;
