import React from "react";
import { Helmet } from "react-helmet";
import HeaderMinimal from "../../components/header/HeaderMinimal";
import PortfolioFour from "../../components/portfolio/PortfolioFour";

const HomeMinimal = () => {
  return (
    <div className="ptf-site-wrapper animsition  ptf-is--home-minimal">
      <Helmet>
        <title>Moonex - Home Minimal</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        {/* <!--Header--> */}
        <HeaderMinimal />

        <div className="ptf-main">
          <div className="ptf-page ptf-page--home-minimal">
            <section>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "15.625rem" }}
              ></div>
              {/* <!--Spacer--> */}
              <div className="container-xxl">
                <PortfolioFour />
              </div>
              {/* End .container-xxl */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>{" "}
              {/* <!--Spacer--> */}
            </section>
          </div>
        </div>
      </div>
      {/* End .ptf-site-wrapper__inner */}

      {/* <!--Footer--> */}
      <footer className="ptf-footer ptf-footer--style-7">
        <div className="container-xxl">
          <div className="row">
            <div className="col-xl-7 offset-xl-5">
              <div className="ptf-footer__top">
                <div className="row">
                  <div className="col-12 col-lg-8 d-flex justify-content-center justify-content-lg-start">
                    <p className="text-center text-lg-start has-black-color">
                      <a
                        className="text-decoration-none"
                        href="tel:+86631250859"
                      >
                        +8 (663) 125-08-59
                      </a>
                      <span className="sep has-1-color">/</span>
                      <a
                        className="text-decoration-none"
                        href="mailto:hello@moonex.com"
                      >
                        hello@moonex.com
                      </a>
                      <span className="sep has-1-color">/</span>90 Fairground
                      Rd, FL 3290, USA
                    </p>
                  </div>
                  <div className="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-end">
                    <p className="ptf-footer-copyright has-black-color">
                      © 2021 <span>Moonex</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomeMinimal;
