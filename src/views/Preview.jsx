import React from "react";
import { Helmet } from "react-helmet";
import HeaderPreview from "../components/header/HeaderPreview";
import BlogDemo from "../components/preview/BlogDemo";
import MainDemo from "../components/preview/MainDemo";
import PortfolioDemo from "../components/preview/PortfolioDemo";
import OthersPages from "../components/preview/OthersPages";

const Preview = () => {
  return (
    <div className="ptf-site-wrapper animsition">
      <Helmet>
        <title>Moonex - Preview</title>
      </Helmet>
      <div className="ptf-site-wrapper__inner">
        {/* <!--Header--> */}
        <HeaderPreview />
        <main className="ptfmain">
          <article
            className="ptf-page ptf-page--intro"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "assets/img/root/intro/bubble-1.png"
              })`,
            }}
          >
            <section>
              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div
                  className="ptf-divider"
                  style={{
                    "--ptf-height": "1px",
                    "--ptf-color": "var(--ptf-color-14)",
                  }}
                ></div>
              </div>
            </section>

            <section id="demo">
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>

              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-8">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1">
                        Get started with a pre-made website
                      </h2>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "1.875rem" }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <p className="fz-18 has-3-color">
                        No-clutter demos with only necessasry design elements
                        for maximum attention to your work.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                ></div>
                <MainDemo />
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
                    "--ptf-color": "var(--ptf-color-14)",
                  }}
                ></div>
              </div>
            </section>

            <section id="portfolio">
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-8">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1">Practical Project Showcases</h2>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "1.875rem" }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <p className="fz-18 has-3-color">
                        Realistic variety of single project & case-study pages
                        with attention to design detail & functionality.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                ></div>
                <PortfolioDemo />
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            <section id="blog">
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-8">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1">Share your insights with Blog</h2>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "1.875rem" }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <p className="fz-18 has-3-color">
                        Not only help you SEO good, increase the traffic for
                        website, it’s a place that you share the stories,
                        insights around design, career or connect with your
                        fans, your fellows.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                ></div>
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  {/* <!--Content Slider--> */}
                  <div className="ptf-content-slider swiper-container blog-container">
                    <div className="swiper-wrapper">
                      <BlogDemo />
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

            <section id="pages">
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "13rem", "--ptf-md": "10rem" }}
              ></div>

              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-8">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1">Necessary Others Pages</h2>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "1.875rem" }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <p className="fz-18 has-3-color">
                        Realistic variety of single project & case-study inner
                        pages with attention to design detail & functionality.
                      </p>
                    </div>
                  </div>
                </div>
                {/* End .row */}
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "6.25rem" }}
                ></div>
                <OthersPages />
              </div>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>
          </article>
        </main>
      </div>

      {/* <!--Footer--> */}
      <footer
        className="ptf-footer ptf-footer--landing"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "assets/img/root/intro/bubble-3.png"
          })`,
        }}
      >
        {/* <!--Spacer--> */}
        <div
          className="ptf-spacer"
          style={{ "--ptf-xxl": "18.125rem", "--ptf-md": "9.0625rem" }}
        ></div>
        <div className="container-xxl text-center">
          <div className="row">
            <div className="col-xl-6 offset-xl-3">
              <h2 className="h1">Purchase For Only</h2>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "1.25rem" }}
              ></div>
              <div className="ptf-footer__price">
                <span>$</span>19
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "0.625rem" }}
              ></div>
              {/* <!--Button--> */}
              <a
                className="ptf-btn ptf-btn--success"
                href="https://themeforest.net/item/moonex-portfolio-agency-react-template/35431456"
                target="_blank"
              >
                Purchase Now
              </a>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": " 4.375rem" }}
              ></div>
              <p className="fz-18 has-3-color">
                Limited time offer. The originally price will back after end of{" "}
                <br />
                promotion. Don't Miss Out!!!
              </p>
            </div>
          </div>
        </div>
        {/* <!--Spacer--> */}
        <div
          className="ptf-spacer"
          style={{ "--ptf-xxl": "16.25rem", "--ptf-md": "8.125rem" }}
        ></div>
      </footer>
    </div>
  );
};

export default Preview;
