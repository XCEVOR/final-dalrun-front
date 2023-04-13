import React from "react";
import { Helmet } from "react-helmet";
import HeaderDefault from "../../../components/header/HeaderDefault";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import Social from "../../../components/social/Social";
import WorksCaseStudy from "./WorksCaseStudy";
import ImageGridThree from "../../../components/image-grid/ImageGridThree";

const WorksShowcase = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--work-showcase-1">
      <Helmet>
        <title>Moonex - Works Showcase</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <article className="ptf-page ptf-page--single-work-1">
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-6">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading">
                        Lewis Studio <br />
                        Website
                      </h1>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "4rem", "--ptf-md": "2.5rem" }}
                      ></div>
                      <Social />
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{
                        "--ptf-lg": "4.375rem",
                        "--ptf-md": "2.1875rem",
                      }}
                    ></div>
                  </div>
                  {/* End .col */}
                  <WorksCaseStudy />
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.25rem", "--ptf-md": "1rem" }}
              ></div>
            </section>

            <section>
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  {/* <!--Simple Image--> */}
                  <div className="ptf-simple-image">
                    <a
                      href="assets/img/portfolio/single-work/content-image-1.png"
                      rel="nofollow"
                    >
                      <img
                        src="assets/img/portfolio/single-work/content-image-1.png"
                        alt="work"
                        loading="lazy"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "3.125rem" }}
              ></div>

              <div className="container">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <p className="fz-30 has-black-color">
                    Lewis Studio Website is a startup that aims to supply energy
                    (starting with gas) to domestic household acrossthe UK.
                    Create a very simple yet stunning logotype and promo site
                    that sets the brand of Entice Energy apart from the
                    competitors like a fresh take on an already saturated area.
                  </p>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "4.375rem", "--ptf-md": "2.1875rem" }}
                ></div>

                {/* <!--Divider--> */}
                <div
                  className="ptf-divider"
                  style={{
                    "--ptf-height": "1px",
                    "--ptf-color": "var(--ptf-color-14)",
                  }}
                ></div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2>Challenge</h2>
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
                  data-aos-delay="0"
                >
                  <p className="fz-18">
                    Create an unconventional yet user-friendly website –
                    innovative, with a clean and simple design that communicates
                    brand values and showcases multi-media content. Site that
                    spreads the message: "Islamic stories your child will love"
                  </p>
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
                  data-aos-delay="0"
                >
                  <ul className="fz-18" style={{ lineHeight: 2 }}>
                    <li>
                      Develop easy-to-find and easy-to-navigate mobile friendly
                      website
                    </li>
                    <li>
                      Showcase each type of content: interactive books, animated
                      stories and picture books, audio stories. Create an
                      experience people want to share with others
                    </li>
                    <li>Persuade to download app and subscribe</li>
                  </ul>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "4.375rem", "--ptf-md": "2.1875rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  {/* <!--Twitter Review--> */}
                  <div className="ptf-twitter-review ptf-twitter-review--style-3">
                    <div className="ptf-twitter-review__header">
                      <div className="ptf-twitter-review__avatar">
                        <img
                          src="assets/img/root/twitter-avatar.png"
                          alt=""
                          loading="lazy"
                        />
                      </div>
                      <div className="ptf-twitter-review__meta">
                        <h6 className="ptf-twitter-review__author">
                          Thiago Alcantara
                        </h6>
                        <div className="ptf-twitter-review__info">
                          <a href="#">@thiago.lfc</a> - 15 Dec, 2022
                        </div>
                      </div>
                      <div className="ptf-twitter-review__icon">
                        <i className="socicon-twitter"></i>
                      </div>
                    </div>
                    <div className="ptf-twitter-review__content">
                      <p>
                        The team at <a href="#">@moonexlabs</a> is incredibly
                        dedicated, knowledgeable, and helpful. The finished
                        product was beautiful, and worth every penny. I would
                        absolutely recommend Moonex Labs.
                      </p>
                    </div>
                  </div>
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
                  data-aos-delay="0"
                >
                  <h2>Solution</h2>
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
                  data-aos-delay="0"
                >
                  <p className="fz-18">
                    Our approach was to present the site as a visual editorial
                    platform with quarterly features based on events and
                    occasions the brand was focused on. Each quarterly focus
                    would be marked by the hero and custom tags that filter
                    content.
                  </p>
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
                  {/* <!--Gallery--> */}
                  <ImageGridThree />
                </div>
              </div>
            </section>

            <section>
              {/* <!--Post Navigation--> */}
              <div className="ptf-post-navigation ptf-post-navigation--style-2">
                <div className="container">
                  <span>Next Project</span>
                  <a className="h1 large-heading ptf-filled-link" href="#">
                    SPA Brand
                  </a>
                </div>
              </div>
            </section>
          </article>
          {/* End .ptf-page */}
        </div>
      </div>
      {/* End .main */}

      {/* <!--Footer--> */}
      <footer className="ptf-footer ptf-footer--style-1">
        <div className="container-xxl">
          <div className="ptf-footer__top">
            <Footer />
          </div>
          <div className="ptf-footer__bottom">
            <CopyRight />
          </div>
        </div>
      </footer>
    </div>
    // End .ptf-is--blog-grid
  );
};

export default WorksShowcase;
