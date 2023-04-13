import React from "react";
import { Helmet } from "react-helmet";
import HeaderDefault from "../../../components/header/HeaderDefault";
import ServiceOne from "../../../components/service/ServiceOne";
import Approach from "../../..//components/service/Approach";
import ContactJarallax from "../../../components/jarallax/ContactJarallax";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";

const Service = () => {
  return (
    <div>
      <Helmet>
        <title>Moonex - Services</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderDefault />
      {/* End Header */}

      <div className="ptf-main">
        <div className="ptf-page ptf-page--services">
          {/*=============================================
        Service Section
      ============================================== */}
          <section>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
            <div className="container-xxl">
              <div className="row">
                <div className="col-lg-3">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h2 className="h1 large-heading">
                      Our <br />
                      Services
                    </h2>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2.5rem" }}
                    ></div>
                    <p className="fz-18">
                      We help ambitious businesses like yours generate more
                      profits by building awareness, driving web traffic,
                      connecting with customers and growing overall sales.
                    </p>
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
                <div className="col-lg-8 offset-lg-1">
                  <ServiceOne />
                </div>
              </div>
            </div>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
          </section>

          {/*=============================================
            Our Approach Section
        ============================================== */}
          <section
            className="has-accent-1-background"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "assets/img/root/service-bubble.png"
              })`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "100% calc(100% + 120px)",
            }}
          >
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
            <div className="container-xxl">
              {/* <!--Animated Block--> */}
              <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay="0"
              >
                <h2 className="h1 large-heading">Our Approach</h2>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "7.5rem", "--ptf-md": " 3.75rem" }}
              ></div>
              <Approach />
            </div>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
          </section>

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

export default Service;
