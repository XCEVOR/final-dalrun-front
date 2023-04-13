import React from "react";

const brandContent = [
  {
    delayAnimation: "0",
    hoverBg: "#fcf8f4",
    imgHeight: "85px",
    imgName: "image-1",
    title: "Zeplin",
  },
  {
    delayAnimation: "100",
    hoverBg: "#f3f7fc",
    imgHeight: "78px",
    imgName: "image-2",
    title: "Dropbox",
  },
  {
    delayAnimation: "200",
    hoverBg: "#f9fcf3",
    imgHeight: "90px",
    imgName: "image-3",
    title: "Shopify",
  },
  {
    delayAnimation: "300",
    hoverBg: "#f9f9f9",
    imgHeight: "90px",
    imgName: "image-4",
    title: "Slack",
  },
  {
    delayAnimation: "400",
    hoverBg: "#fdf4fb",
    imgHeight: "62px",
    imgName: "image-5",
    title: "WooCommerce",
  },
  {
    delayAnimation: "500",
    hoverBg: "#fdf4fb",
    imgHeight: "77px",
    imgName: "image-6",
    title: "InvisionApp",
  },
];

const Brand = () => {
  return (
    <div className="row" style={{ "--bs-gutter-y": "2rem" }}>
      {brandContent.map((item, i) => (
        <div className="col-6 col-md-3 col-lg-2" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={item.delayAnimation}
          >
            {/* <!--Partner Box--> */}
            <div
              className="ptf-partner-box"
              style={{
                "--ptf-hover-background": item.hoverBg,
                "--ptf-image-height": item.imgHeight,
              }}
            >
              <div className="ptf-partner-box__image">
                <img
                  src={`assets/img/root/partners/${item.imgName}.png`}
                  alt="Zeplin"
                  loading="lazy"
                />
              </div>
              <h6 className="ptf-partner-box__title">{item.title}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Brand;
