import React from "react";
import { Helmet } from "react-helmet";
import PersonalInfo from "../../components/about/PersonalInfo";
import BrandFour from "../../components/brand/BrandFour";
import BrandThree from "../../components/brand/BrandThree";
import CallToAction from "../../components/CallToAction";
import CounterFour from "../../components/counter/CounterFour";
import FooterFour from "../../components/footer/FooterFour";
import HeaderFreelancer from "../../components/header/HeaderFreelancer";
import HeroFreelancer from "../../components/hero/HeroFreelancer";
import InstagramFeed from "../../components/InstagramFeed";
import Portfolio from "../../components/portfolio/Portfolio";
import Resume from "../../components/Resume";
import TestimonialThree from "../../components/testimonial/TestimonialThree";

const avatar = "assets/img/about-me-main-image.jpg";

const HomeFreelancer = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--home-freelancer ">
      <Helmet>
        <title>Moonex - Home Freelancer</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderFreelancer />
      {/* End header */}

      <div className="ptf-site-wrapper__inner">
        <div className="ptf-main">
          <div className="ptf-page ptf-page--home-freelancer">
            {/*=============================================
            Start Hero Title Section 
            ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "5rem", "--ptf-md": "2.5rem" }}
              ></div>

              <div className="container">
                <div className="row">
                  <HeroFreelancer />
                </div>
              </div>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
              ></div>
            </section>
            {/* End Hero Title Section */}

            {/*=============================================
            Start About Section 
            ============================================== */}
            <section>
              <div className="container-xxl">
                <div
                  className="row align-items-center"
                  style={{ "--bs-gutter-y": "5.625rem" }}
                >
                  <div className="col-xl-6 order-xl-2 text-center">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <div className="ptf-custom--5512">
                        {/* <!--Mask Image--> */}
                        <div className="ptf-mask-image">
                          <img
                            src="assets/img/root/about-me/about-me-main-image-layer-2.png"
                            alt="layer"
                            loading="lazy"
                            style={{ zIndex: "2" }}
                          />
                          <img
                            src="assets/img/root/about-me/about-me-main-image-mask.png"
                            alt="layer"
                            loading="lazy"
                            className="lay"
                            style={{
                              zIndex: "1",
                            }}
                            srcSet={avatar}
                          />
                          {/* End about main image for profile */}

                          <img
                            src="assets/img/root/about-me/about-me-main-image-layer-1.png"
                            alt="layer"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End .col */}

                  <div className="col-xl-3 col-sm-6 order-xl-1">
                    <PersonalInfo />
                  </div>
                  {/* End .col */}

                  <div className="col-xl-3 col-sm-6 order-xl-3 text-xl-end">
                    <CounterFour />
                  </div>
                  {/* End .col */}
                </div>
              </div>
            </section>

            {/*=============================================
            Start Brand Section 
            ============================================== */}
            <section>
              <div className="container">
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
                ></div>
                <div className="row">
                  <div className="col-xl-10 offset-xl-1">
                    {/* <!--Clients List--> */}
                    <BrandThree />
                  </div>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": " 10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            <section>
              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div
                  className="ptf-divider"
                  style={{ "--ptf-height": "1px" }}
                ></div>
              </div>
            </section>

            {/*=============================================
            Start Advantage Section 
            ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
              ></div>
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 has-secondary-font fw-normal text-center">
                    My Advantage
                  </h2>
                </div>
                {/* End title */}

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5rem", "--ptf-md": "2.5rem" }}
                ></div>

                <div
                  className="row"
                  style={{
                    "--bs-gutter-x": "3.125rem",
                    "--bs-gutter-y": "3.125rem",
                  }}
                >
                  <BrandFour />
                </div>
                {/* End brand */}
              </div>
              {/* End .container */}

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
                  style={{ "--ptf-height": "1px" }}
                ></div>
              </div>
            </section>

            <section className="ptf-custom--1528">
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
              ></div>

              {/*=============================================
                Start Education & Experience Section 
                ============================================== */}
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 has-secondary-font fw-normal text-center">
                    Education & Experience
                  </h2>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": " 5rem", "--ptf-md": "2.5rem" }}
                ></div>
                <div className="row" style={{ "--bs-gutter-y": "90px" }}>
                  <Resume />
                </div>
              </div>
              {/* End .container-xxl */}

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>

              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div
                  className="ptf-divider"
                  style={{ "--ptf-height": "1px" }}
                ></div>
              </div>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>

              {/*=============================================
                Start Portfolio Section
              ============================================== */}
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 has-secondary-font fw-normal text-center">
                    My Latest Projects
                  </h2>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5rem", "--ptf-md": "2.5rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  {/* <!--Content Slider--> */}
                  <Portfolio />
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                ></div>
                {/* <!--Animated Block--> */}
              </div>
              {/* End portoflio section */}

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "5rem", "--ptf-md": "5rem" }}
              ></div>

              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div
                  className="ptf-divider"
                  style={{ "--ptf-height": "1px" }}
                ></div>
              </div>
              {/* End devider */}

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>

              {/*=============================================
                Start Testimonial  
                ============================================== */}
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  {/* <!--Content Slider--> */}
                  <div className="ptf-content-slider swiper-container">
                    {/* <!--Testimonial--> */}
                    <TestimonialThree />
                  </div>
                </div>
                {/* End Testimonial */}

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "10.125rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="has-secondary-font fw-normal text-center">
                    <a href="#">@brunoerdison</a>
                  </h2>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "3.125rem", "--ptf-md": "1.5625rem" }}
                ></div>

                {/*=============================================
                Start Instagram Grid 
                ============================================== */}
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="100"
                >
                  {/* <!--Instagram Feed--> */}
                  <InstagramFeed />
                </div>
                {/* End ptf-instagram-feed */}
              </div>
            </section>
            {/* End mulitblock */}

            {/*=============================================
            Start Call To Action  
            ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "15.625rem" }}
              ></div>
              <div className="container-xxl text-center">
                <div className="d-inline-flex text-start">
                  <CallToAction />
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem" }}
              ></div>
            </section>
          </div>
          {/* End pft-page */}
        </div>
      </div>
      {/* End ptf-site-wrapper */}

      {/* <!--Footer--> */}
      <footer className="ptf-footer ptf-footer--style-6">
        <div className="container-xxl">
          <FooterFour />
        </div>
      </footer>
    </div>
  );
};

export default HomeFreelancer;
