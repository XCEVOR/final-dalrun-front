import React from "react";

const heroContent = {
  title: "이 주의 러너",
  subTitle1: "username",
  detailsDescription: `content.................................`,
};

const HeromainPage = () => {
  return (
    <div className="row">
      <div className="col-xl-9">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <h1 className="fz-25 fz-130--lg fz-90--md">{heroContent.title}</h1>
        </div>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "0.625rem" }}></div>
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <p
            className="
                fz-40
                fw-bold
                lh-1p3
                text-uppercase
                has-white-color
              "
          >
            {heroContent.subTitle1} <br />
      
          </p>
        </div>
        {/* <!--Spacer--> */}
       
        {/* <!--Animated Block--> */}
       
       
        <div className="row">
          <div className="col-xl-8">
            <div style={{ maxWidth: "545px" }}>
              {/* <!--Animated Block--> */}
              <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay="0"
              >
                {/* <!--Divider--> */}
                <div className="ptf-divider"></div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{
                    "--ptf-xxl": "4.375rem",
                    "--ptf-md": "2.1875rem",
                  }}
                ></div>
                <p className="fz-24 has-black-color">
                  {heroContent.detailsDescription}
                </p>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{
                  "--ptf-xxl": "6.875rem",
                  "--ptf-md": "3.4375rem",
                }}
              ></div>
              {/* <!--Animated Block--> */}
              <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay="0"
              >
                {/* <!--Button--> */}
                <a
                  className="ptf-btn ptf-btn--primary ptf-btn--inversed"
                  href="about-us.html"
                  target="_self"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 d-none d-xl-block">
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "3.75rem" }}></div>
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          {/* <!--Mask Image--> */}
        </div>
      </div>
    </div>
  );
};

export default HeromainPage;
