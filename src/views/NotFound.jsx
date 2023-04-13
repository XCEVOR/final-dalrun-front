import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import HeaderDefault from "../components/header/HeaderDefault";
import CopyRight from "../components/footer/copyright/CopyRight";
import Footer from "../components/footer/Footer";

const NotFound = () => {
  return (
    <div>
      <Helmet>
        <title>Moonex - 404 Page</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderDefault />
      {/* End Header */}

      <div className="ptf-main">
        <div className="ptf-page ptf-page--404">
          <section className="min-vh-100">
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "14.375rem", "--ptf-md": "7.1875rem" }}
            ></div>
            <div className="container-xxl">
              <div className="row">
                <div className="col-lg-5 offset-lg-1 order-lg-2 text-center">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="300"
                  >
                    <img
                      src="assets/img/root/404-robot.png"
                      alt="robot"
                      loading="lazy"
                    />
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{
                      "--ptf-lg": "5.625rem",
                      "--ptf-md": "2.8125rem",
                    }}
                  ></div>
                </div>
                <div className="col-lg-6">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h1 className="large-heading">
                      Opps...! <br />
                      Page not found
                    </h1>
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "3.75rem", "--ptf-md": "1.875rem" }}
                  ></div>
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="100"
                  >
                    <p>You seem can’t to find the page you’re looking for.</p>
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
                    data-aos-delay="200"
                  >
                    <Link to="/">Back to Home</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "14.375rem", "--ptf-md": "7.1875rem" }}
            ></div>
          </section>
        </div>
      </div>

      {/*=============================================
        Start Footer
        ============================================== */}
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
  );
};

export default NotFound;
