import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Award from "../../components/award/Award";
import Blog from "../../components/blog/Blog";
import Brand from "../../components/brand/Brand";
import Counter from "../../components/counter/Counter";
import Footer from "../../components/footer/Footer";
import Approach from "../../components/service/Approach";
import ServiceOne from "../../components/service/ServiceOne";
import Testimonial from "../../components/testimonial/Testimonial";


import CopyRight from "../../components/dalrun-jy/footer/CopyRight";
import PortfoliomainPage from "../../components/dalrun-jy/PortfoliomainPage";
import TeammainPage from "../../components/dalrun-jy/TeammainPage";
import HeadermainPage from "../../components/dalrun-jy/HeadermainPage";
import HeromainPage from "../../components/dalrun-jy/HeromainPage";
import Dotmap from "../../components/dalrun-jy/dotmap";
import DotMapInfo from "../../components/dalrun-jy/dotmapinfo";

const MainDotMap = () => {


  return (
    <div className="ptf-site-wrapper animsition  ptf-is-default">
      <Helmet>
        <title>메인 페이지</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeadermainPage />
      {/* End Header Default */}

      <div className="ptf-site-wrapper__inner">
        <div className="ptf-main">
          <div className="ptf-page ptf-page--home-default">
            <section>
              <Dotmap />
            </section>
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "2rem" }}
            ></div>

            <section>
              <div
                className="row"
                style={{ "--bs-gutter-x": "2rem", "--bs-gutter-y": "2.5rem" }}
              >
                <DotMapInfo />
              </div>
            </section>
          </div>
        </div>
        {/* End .ptf-main */}

        {/* <!--Footer--> */}
        <footer className="ptf-footer ptf-footer--style-1">
          <div className="container-xxl">

            <div className="ptf-footer__bottom">
              <CopyRight />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainDotMap;
