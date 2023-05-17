import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";

const StoreMainCover = ({ scrollFunc1comp, scrollFunc2comp }) => {
  const [isOpen, setOpen] = useState(false);

  const settings = {
    dots: false,
    arrow: false,
    infinite: false,
    fade: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    // adaptiveHeight: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="ptf-showcase-image store_main_cover_image_1">
          <div className="ptf-showcase-slide">
            <div className="container div_center">
              <div className="title_container">
                <h1 className="fz-100 fz-90--lg lh-1 has-white-color text-center">
                  <span className="has_title_accent_1">DalRun</span>
                  <span className="has_title_accent_2">, Store </span>
                </h1>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.125rem" }}
              ></div>

              <p
                className="fz-24 has-gray-color text-center store_main_cover_subtext"
                style={{ maxWidth: "36.375rem", margin: "0 auto" }}
              >
                러너들을 위한 완벽한 아이템으로 러닝의 자유를 만끽하세요
              </p>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.625rem" }}
              ></div>

              <div className="d-flex justify-content-center">
                {/* <!--Button--> */}
                <a className="store_theme_button store_main_cover_prim_btn" onClick={scrollFunc1comp}>
                  추천 상품
                </a>
                {/* <!--Button--> */}
                <a
                  className="store_theme_button store_main_cover_secon_btn" onClick={scrollFunc2comp}
                  style={{ marginLeft: "2rem" }}
                >
                  인기 상품
                </a>
                {/* <!--Button--> */}
                {/* <a
                  className="store_theme_button store_main_cover_secon_btn" onClick={scrollFunc2comp}
                  style={{ marginLeft: "2rem" }}
                >
                  인기 상품
                </a> */}
              </div>
            </div>
          </div>
        </div>
        {/* End .ptf-showcase-image */}

      </Slider>

    </div>
  );
};

export default StoreMainCover;
