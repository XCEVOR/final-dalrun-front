import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import HeaderTrending from "../../components/header/HeaderTrending";
import FooterThree from "../../components/footer/FooterThree";
import CopyRightThree from "../../components/footer/copyright/CopyRightThree";
import PortfolioFive from "../../components/portfolio/PortfolioFive";
import HeroModern from "../../components/hero/HeroModern";
import ServiceListFive from "../../components/list/ServiceListFive";
import BrandTwo from "../../components/brand/BrandTwo";
import Team from "../../components/team/Team";
import BlogTwo from "../../components/blog/BlogTwo";

const HomeModern = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--home-modern ">
      <Helmet>
        <title>Moonex - Home Modern</title>
      </Helmet>
      {/* End Page SEO Content */}

      <div className="ptf-site-wrapper__inner">
        <HeaderTrending />
        {/* End  HeaderTrending */}

        <div className="ptf-main">
          <div className="ptf-page ptf-page--home-modern">
            <section>
              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div
                  className="ptf-divider"
                  style={{
                    "--ptf-color": "var(--ptf-color-14)",
                    "--ptf-height": "1px",
                  }}
                ></div>
              </div>
            </section>

            {/*=============================================
            Start Hero  Section 
            ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
              ></div>

              <div className="container-xxl">
                <HeroModern />
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
                    "--ptf-color": "var(--ptf-color-14)",
                    "--ptf-height": "1px",
                  }}
                ></div>
              </div>
            </section>

            {/*=============================================
            Start Service  Section 
            ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "4.375rem", "--ptf-md": "2.1875rem" }}
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
                style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
              ></div>
            </section>

            <section>
              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div
                  className="ptf-divider"
                  style={{
                    "--ptf-color": "var(--ptf-color-14)",
                    "--ptf-height": "1px",
                  }}
                ></div>
              </div>
            </section>

            {/*=============================================
            Start Latest Project Section 
            ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "4.375rem", "--ptf-md": "2.1875rem" }}
              ></div>

              <div className="container-xxl">
                <PortfolioFive />

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "10rem", "--ptf-md": "3.125rem" }}
                ></div>
                <div className="text-center">
                  {/* {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <Link className="ptf-circle-link" to="/works-grid">
                      More <br />
                      Projects
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
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
                ></div>
              </div>
              {/* End .container-xxl */}
            </section>
            {/* End Portfolio Endpoint */}

            <section>
              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div
                  className="ptf-divider"
                  style={{
                    "--ptf-color": "var(--ptf-color-14)",
                    "--ptf-height": "1px",
                  }}
                ></div>
              </div>
              {/* End .container-xxl */}
            </section>

            {/*=============================================
            Start Brand  Section 
            ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "4.375rem", "--ptf-md": "2.1875rem" }}
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
                        Our Clients & <br />
                        Partners
                      </h2>
                    </div>
                  </div>
                  {/* End .col */}

                  <div className="col-lg-5">
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{
                        "--ptf-xxl": " 0.625rem",
                        "--ptf-lg": "1.875rem",
                      }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <p className="has-3-color">
                        The successful of client is our reputation! Since 2006,
                        we’ve partnered with <br />
                        more than 150 brands.
                      </p>
                    </div>
                  </div>
                  {/* End .col */}
                </div>
                {/* End .row */}

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
                ></div>

                <div className="row">
                  <div className="col-lg-12">
                    {/* <!--Clients List--> */}
                    <BrandTwo />
                  </div>
                </div>
                {/* End .row */}
              </div>
              {/* End .container-xxl */}

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
              ></div>
            </section>
            {/* End brand section */}

            <section>
              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div
                  className="ptf-divider"
                  style={{
                    "--ptf-color": "var(--ptf-color-14)",
                    "--ptf-height": "1px",
                  }}
                ></div>
              </div>
              {/* End .container-xxl */}
            </section>

            {/*=============================================
            Start Team  Section 
            ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "4.375rem", "--ptf-md": "2.1875rem" }}
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
                        Moonex’s <br />
                        Team
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{
                        "--ptf-xxl": "0.625rem",
                        "--ptf-lg": "1.875rem",
                      }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <p className="has-3-color">
                        Each product is built by passionate hearts. That is our
                        team!
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
                ></div>
                <div className="ptf-team-member-grid">
                  <Team />
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
              ></div>
            </section>
            {/* End team section */}

            <section>
              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div
                  className="ptf-divider"
                  style={{
                    "--ptf-color": "var(--ptf-color-14)",
                    "--ptf-height": "1px",
                  }}
                ></div>
              </div>
              {/* End .container-xxl */}
            </section>

            {/*=============================================
            Start Blog  Section 
            ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "4.375rem", "--ptf-md": "2.1875rem" }}
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
                        The Wolrd of <br />
                        Moonex
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{
                        "--ptf-xxl": "0.625rem",
                        "--ptf-lg": "1.875rem",
                      }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <div className="text-lg-end">
                        <Link
                          className="ptf-link-with-arrow text-uppercase has-3-color"
                          to="/blog-grid"
                        >
                          All Articles
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
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
                ></div>
                <div className="row">
                  <div className="col-lg-12">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <div
                        className="ptf-isotope-grid row"
                        style={{
                          "--bs-gutter-x": "3.75rem",
                          "--bs-gutter-y": "3rem",
                        }}
                      >
                        <BlogTwo />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "12.5rem", "--ptf-md": "6.25rem" }}
              ></div>
            </section>
            {/* End blog section */}

            {/*=============================================
            Start Call To Action  Section 
            ============================================== */}
            <section>
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <Link
                    className="
                      ptf-link-with-arrow
                      fz-90
                      fz-60--md
                      fz-40--sm
                      fw-semibold
                      text-uppercase
                      has-black-color
                    "
                    to="/contact"
                    style={{ "--ptf-icon-indent": "4.375rem" }}
                  >
                    Let’s Talk
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
                    "--ptf-color": "var(--ptf-color-14)",
                    "--ptf-height": " 1px",
                  }}
                ></div>
              </div>
            </section>
          </div>
          {/* End .ptf-page */}
        </div>
        {/* End .ptf-main */}
      </div>
      {/* End .ptf-site-wrapper__inner */}

      {/*=============================================
        Start Footer Section 
        ============================================== */}
      <footer className="ptf-footer ptf-footer--style-4">
        <div className="container-xxl">
          <div className="ptf-footer__top">
            <FooterThree />
          </div>
          {/* End .ptf-footer__top */}

          <div className="ptf-footer__bottom">
            <CopyRightThree />
          </div>
          {/* End .ptf-footer__bottom */}
        </div>
      </footer>
    </div>
  );
};

export default HomeModern;
