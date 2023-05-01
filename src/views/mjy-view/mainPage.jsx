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

const MainPage = () => {
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
            {/*=============================================
                이 주의 러너 베너
              ============================================== */}
            <div className="container-xxl">
            <section className="has-accent-1-background">
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem" }}
              ></div>
                <HeromainPage />
             
              {/* <!--Spacer--> */}

            </section>
            </div>
            {/*=============================================
                메뉴 버튼
              ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.375rem", "--ptf-md": "1.1875rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-lg-7">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="text-uppercase fw-semibold">
                        menu<br />

                      </h2>
                    </div>
                  </div>

                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "2.75rem" }}
                ></div>
                <div className="ptf-team-member-grid">
                  <TeammainPage />
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
              ></div>
            </section>

            {/*=============================================
                이주의 러너 러닝 코스 추천
              ============================================== */}
            <section>
              <div className="container-xxl">
                <div className="row align-items-center">
                  <div className="col-12 col-md-9">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="text-uppercase fw-semibold">
                        이 주의 러닝 코스 추천
                      </h2>
                    </div>
                  </div>
                  <div className="col-12 col-md-3 text-md-end">
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-md": "1.875rem" }}
                    ></div>
                    {/* <!--Animated Block--> */}

                  </div>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "2.25rem" }}
                ></div>
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  {/* <!--Content Slider--> */}
                  <PortfoliomainPage />
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "9.5rem" }}
              ></div>
            </section>

            {/*=============================================
               러닝 대회 일정
              ============================================== */}

            <section>


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

export default MainPage;