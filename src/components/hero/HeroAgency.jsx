import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";

const HeroAgency = () => {
  const [isOpen, setOpen] = useState(false);

  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    fade: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    // adaptiveHeight: true,
  };
  return (
    <>
      <Slider {...settings}>
        <div className="ptf-showcase-image image-1">
          <div className="ptf-showcase-slide">
            <div className="container">
              <h1 className="fz-100 fz-90--lg lh-1 has-white-color text-center">
                <span className="has-accent-1">Bigger</span>, Bolder <br />&
                Better
              </h1>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.125rem" }}
              ></div>

              <p
                className="fz-24 has-white-color text-center"
                style={{ maxWidth: "34.375rem", margin: "0 auto" }}
              >
                Like any great agency, we are only as good as the result we
                deliver of our recent work.
              </p>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.625rem" }}
              ></div>

              <div className="d-flex justify-content-center">
                {/* <!--Button--> */}
                <a className="ptf-btn ptf-btn--primary" href="" target="_self">
                  Get Started
                </a>
                {/* <!--Button--> */}
                <Link
                  className="ptf-btn ptf-btn--secondary"
                  to="/service"
                  style={{ marginLeft: "2rem" }}
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End .ptf-showcase-image */}

        <div className="ptf-showcase-image image-2">
          <div className="ptf-showcase-slide">
            <div className="container">
              <h1 className="fz-100 fz-90--lg lh-1 has-white-color text-center">
                <span className="has-accent-1">Swiss</span> Style <br />
                Interface
              </h1>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.125rem" }}
              ></div>
              <p
                className="fz-24 has-white-color text-center"
                style={{ maxWidth: "34.375rem", margin: "0 auto" }}
              >
                Like any great agency, we are only as good as the result we
                deliver of our recent work.
              </p>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.625rem" }}
              ></div>
              <div className="d-flex justify-content-center">
                {/* <!--Button--> */}
                <a className="ptf-btn ptf-btn--primary" href="" target="_self">
                  Get Started
                </a>
                {/* <!--Button--> */}
              </div>
            </div>
          </div>
        </div>
        {/* End .ptf-showcase-image */}

        <div className="ptf-showcase-image image-3">
          <div className="ptf-showcase-slide">
            <div className="container">
              <h1 className="fz-100 fz-90--lg lh-1 has-white-color">
                <span className="has-accent-1">Crafting</span> Digital
                Experience
              </h1>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.125rem" }}
              ></div>
              <p
                className="fz-24 has-white-color"
                style={{ maxWidth: "34.375rem" }}
              >
                Like any great agency, we are only as good as the result we
                deliver of our recent work.
              </p>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.625rem" }}
              ></div>
              <div className="d-flex">
                {/* <!--Button--> */}
                <a className="ptf-btn ptf-btn--primary" href="" target="_self">
                  Get Started
                </a>
                {/* <!--Video Button--> */}
                <div
                  className="ptf-video-button"
                  onClick={() => setOpen(true)}
                  style={{
                    "--ptf-title-color": "var(--ptf-color-white)",
                    marginLeft: "2rem",
                  }}
                >
                  <a href="#" rel="nofollow">
                    <i className="lnil lnil-play"></i>
                  </a>
                  <div className="ptf-video-button__title">
                    View our <br />
                    story
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End .ptf-showcase-image */}
      </Slider>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="1gyTUHP6ne8"
        onClose={() => setOpen(false)}
      />
      {/* End Youtube Modal video */}
    </>
  );
};

export default HeroAgency;
