import React from "react";
import { Helmet } from "react-helmet";
import BrandFour from "../../../components/brand/BrandFour";
import BrandThree from "../../../components/brand/BrandThree";
import FooterFour from "../../../components/footer/FooterFour";
import HeaderDefault from "../../../components/header/HeaderDefault";
import InstagramFeed from "../../../components/InstagramFeed";
import ServiceListFive from "../../../components/list/ServiceListFive";
import Resume from "../../../components/Resume";
import SocialTwo from "../../../components/social/SocialTwo";
import TestimonialThree from "../../../components/testimonial/TestimonialThree";

const avatar = "assets/img/about-me-main-image.jpg";

const AboutMe = () => {
  return (
    <div className="ptf-site-wrapper animsition  ptf-is--about-me">
      <Helmet>
        <title>Moonex - AboutMe</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="ptf-main">
          <div className="ptf-page ptf-page--about-me">
            {/*=============================================
                Start About Me Hero Section
              ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
              ></div>

              <div className="container-xxl">
                <div className="row align-items-center">
                  <div className="col-xl-7 order-xl-2 text-center">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="400"
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
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xl": "5.625rem" }}
                    ></div>
                  </div>
                  <div className="col-xl-5">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 large-heading has-secondary-font fw-normal">
                        Bruno Erdison
                      </h2>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "1.5625rem" }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <p className="fz-24 text-uppercase">
                        UI/UX Interaction <br />
                        Designer
                      </p>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{
                        "--ptf-xxl": "8.125rem",
                        "--ptf-md": "4.0625rem",
                      }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="200"
                    >
                      <h5 className="fz-14 text-uppercase has-3-color fw-normal">
                        Biography
                      </h5>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.875rem" }}
                      ></div>
                      <p className="fz-30 has-black-color has-secondary-font">
                        Work for money & design for love! <br />
                        I’m Bruno, an UI/UX Interaction <br />
                        Designer based in Poland.
                      </p>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="300"
                    >
                      <h5 className="fz-14 text-uppercase has-3-color fw-normal">
                        Contact
                      </h5>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.875rem" }}
                      ></div>
                      <p className="fz-30 has-black-color has-secondary-font">
                        Warsaw, Poland <br />
                        <a href="mailto:hello@brunoerdison.com">
                          hello@brunoerdison.com
                        </a>
                        <br />
                        <a href="tel:+6835688986">+68 3568 89 86</a>
                      </p>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.5625rem" }}
                      ></div>
                      <div className="has-black-color">
                        <SocialTwo />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.125rem", "--ptf-md": "4.0625rem" }}
              ></div>
            </section>

            <section>
              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div className="ptf-divider"></div>
              </div>
            </section>

            {/*=============================================
            Start Service  Section 
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
                  <h5 className="fz-14 text-uppercase has-2-color fw-normal">
                    Our Services
                  </h5>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "3.125rem", "--ptf-md": "1.5625rem" }}
                ></div>
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="100"
                >
                  {/* <!--Services List--> */}
                  <ServiceListFive />
                </div>
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
                <div className="ptf-divider"></div>
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
                  <h2 className="h1 has-secondary-font fw-normal ">
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
                <div className="ptf-divider"></div>
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
                  <h2 className="h1 has-secondary-font fw-normal ">
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
                <div className="ptf-divider"></div>
              </div>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
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
              </div>
              {/* End .container-xxl */}

              <div className="container-xxl">
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "12rem", "--ptf-md": "9.75rem" }}
                ></div>
                <div className="row">
                  <div className="col-xl-10 offset-xl-1">
                    {/* <!--Clients List--> */}
                    <BrandThree />
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
            {/* End mulitblock */}

            {/*=============================================
                Start Instagram Grid 
                ============================================== */}
            <section>
              <div className="container-xxl">
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

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                ></div>
              </div>
            </section>
          </div>
        </div>
        {/* End ptf-main */}
      </div>
      {/* End ptf-site-wrapper__inner */}

      {/* <!--Footer--> */}
      <footer className="ptf-footer ptf-footer--style-6">
        <div className="container-xxl">
          <FooterFour />
        </div>
      </footer>
    </div>
  );
};

export default AboutMe;
