import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import HeaderDark from "../../components/header/HeaderDark";
import FooterThreeDark from "../../components/footer/FooterThreeDark";
import CopyRightThreeDark from "../../components/footer/copyright/CopyRightThreeDark";
import HeroDark from "../../components/hero/HeroDark";
import Portfolio from "../../components/portfolio/Portfolio";
import ContactJarallax from "../../components/jarallax/ContactJarallax";
import ServiceListFour from "../../components/list/ServiceListFour";
import BrandFive from "../../components/brand/BrandFive";
import TestimonialFour from "../../components/testimonial/TestimonialFour";

const HomeDark = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--home-dark ">
      <Helmet>
        <title>Moonex - Home Dark</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderDark />
      {/* End  HeaderDark */}

      <div className="ptf-site-wrapper__inner">
        <div className="ptf-main">
          <div className="ptf-page ptf-page--home-dark"></div>
          {/*=============================================
          Start Hero Section 
          ============================================== */}
          <section>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "4.375rem", "--ptf-md": "2.1875rem" }}
            ></div>

            <div className="container-xxl">
              <HeroDark />
            </div>

            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
          </section>

          <section>
            <div className="container-xxl">
              {/* <!--Divider--> */}
              <div
                className="ptf-divider"
                style={{
                  "--ptf-height": "1px",
                  "--ptf-color": "var(--ptf-color-white)",
                }}
              ></div>
            </div>
          </section>

          <section className="ptf-custom--1674">
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
            ></div>

            <div className="container-xxl">
              <div className="row" style={{ "--bs-gutter-y": "3.75rem" }}>
                <div className="col-lg-3">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <div className="fz-80 has-white-color lh-1">1</div>
                  </div>
                </div>
                <div className="col-lg-2">
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "1.25rem" }}
                  ></div>
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="100"
                  >
                    <h2
                      className="
                          fz-16
                          lh-1p5
                          text-uppercase
                          has-3-color
                          fw-normal
                        "
                    >
                      Our <br />
                      Services
                    </h2>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="row">
                    <ServiceListFour />
                  </div>
                </div>
              </div>
            </div>
            {/* End container-xxl */}

            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>

            <div className="container-xxl">
              {/* <!--Divider--> */}
              <div
                className="ptf-divider"
                style={{
                  "--ptf-height": "1px",
                  "--ptf-color": "var(--ptf-color-white)",
                }}
              ></div>
            </div>

            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
            ></div>

            <div className="container-xxl">
              <div className="row" style={{ "--bs-gutter-y": "3.75rem" }}>
                <div className="col-lg-3">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <div className="fz-80 has-white-color lh-1">2</div>
                  </div>
                </div>
                <div className="col-lg-2">
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "1.25rem" }}
                  ></div>
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="100"
                  >
                    <h2
                      className="
                          fz-16
                          lh-1p5
                          text-uppercase
                          has-3-color
                          fw-normal
                        "
                    >
                      Latest <br />
                      Projects
                    </h2>
                  </div>
                </div>
                <div className="col-lg-7">
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "1.25rem" }}
                  ></div>
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="200"
                  >
                    <Link
                      className="ptf-link-with-arrow fz-48 has-3-color"
                      to="/works-grid"
                    >
                      All Projects
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        style={{ height: "1em" }}
                        viewBox="0 0 17 17"
                      >
                        <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              {/* End .row */}

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "5.625rem" }}
              ></div>

              <div className="row">
                <div className="col-lg-12 has-dark-color">
                  <Portfolio />
                </div>
              </div>
            </div>
            {/* End .container-xxl */}

            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "9rem" }}
            ></div>
          </section>
          {/* End .ptf-custom--1674 */}

          <section>
            <div className="container-xxl">
              {/* <!--Divider--> */}
              <div
                className="ptf-divider"
                style={{
                  "--ptf-height": "1px",
                  "--ptf-color": "var(--ptf-color-white)",
                }}
              ></div>
            </div>
          </section>

          <section>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
            ></div>

            <div className="container-xxl">
              <div className="row" style={{ "--bs-gutter-y": "3.75rem" }}>
                <div className="col-lg-3">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <div className="fz-80 has-white-color lh-1">3</div>
                  </div>
                </div>
                <div className="col-lg-2">
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "1.25rem" }}
                  ></div>
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="100"
                  >
                    <h2
                      className="
                          fz-16
                          lh-1p5
                          text-uppercase
                          has-3-color
                          fw-normal
                        "
                    >
                      Trusted <br />
                      Partners
                    </h2>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="row">
                    <BrandFive />
                  </div>
                </div>
              </div>
            </div>
            {/* End .container-xxl */}

            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
          </section>

          <section>
            <div className="container-xxl">
              {/* <!--Divider--> */}
              <div
                className="ptf-divider"
                style={{
                  "--ptf-height": "1px",
                  "--ptf-color": "var(--ptf-color-white)",
                }}
              ></div>
            </div>
          </section>

          <section className="ptf-custom--1772">
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
            ></div>
            <div className="container-xxl">
              <div className="row" style={{ "--bs-gutter-y": "3.75rem" }}>
                <div className="col-lg-3">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <div className="fz-80 has-white-color lh-1">4</div>
                  </div>
                </div>
                <div className="col-lg-2">
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "1.25rem" }}
                  ></div>
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="100"
                  >
                    <h2
                      className="
                          fz-16
                          lh-1p5
                          text-uppercase
                          has-3-color
                          fw-normal
                        "
                    >
                      What <br />
                      Clients Say
                    </h2>
                  </div>
                </div>
                <div className="col-lg-7">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="200"
                  >
                    {/* <!--Testimonial--> */}
                    <TestimonialFour />
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
          </section>
          {/* End .ptf-custom--1772 */}

          {/*=============================================
            Start Contact Section 
            ============================================== */}
          <section
            className="jarallax jarallax-img"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL +
                "assets/img/services-call-to-action-background.png"
              })`,
            }}
          >
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": " 12.5rem", "--ptf-md": "6.25rem" }}
            ></div>
            <ContactJarallax />
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
          </section>

          {/* End .ptf-page */}
        </div>
        {/* End .ptf-main */}
      </div>
      {/* End .ptf-site-wrapper__inner */}

      {/*=============================================
        Start Footer Section 
        ============================================== */}
      <footer className="ptf-footer ptf-footer--style-5">
        <div className="container-xxl">
          <div className="ptf-footer__top">
            <FooterThreeDark />
          </div>
          {/* End .ptf-footer__top */}

          <div className="ptf-footer__bottom">
            <CopyRightThreeDark />
          </div>
          {/* End .ptf-footer__bottom */}
        </div>
      </footer>
    </div>
  );
};

export default HomeDark;
