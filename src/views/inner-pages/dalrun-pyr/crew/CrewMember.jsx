import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../../components/dalrun-pyr/Header";
import CrewMemberBody from "./CrewMemberBody";

const CrewMember = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--works-listing">
      <Helmet>
        <title>달런 달런</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <Header />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <div className="ptf-page ptf-page--portfolio-listing">
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>

              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-10">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading">크루 소개</h1>
                    </div>
                  </div>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "4.375rem" }}
                ></div>
              </div>
              {/* End .container-xxl */}

              {/*=============================================
                Start Portfolio main 
                ============================================== */}
              <div className="container-xxl">
                <CrewMemberBody/>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="text-center">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <a className="ptf-load-more" href="#">
                    More
                  </a>
                </div>
              </div>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>
          </div>
          {/* End .ptf-page */}
        </div>
      </div>
      {/* End .main */}

      {/* <!--Footer--> */}
      <footer className="ptf-footer ptf-footer--style-1">
        <div className="container-xxl">
          <div className="ptf-footer__top">
            {/* <Footer /> */}
          </div>
          <div className="ptf-footer__bottom">
            {/* <CopyRight /> */}
          </div>
        </div>
      </footer>
    </div>
    // End .ptf-is--blog-grid
  );
};

export default CrewMember;
