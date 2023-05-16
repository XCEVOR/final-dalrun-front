import React from "react";
import { Helmet } from "react-helmet";
import ContentComp from "../../../../components/dalrun-jy/competition/ContentComp";
import HeaderComp from "../../../../components/dalrun-jy/competition/HeaderComp";
import CompSidebarPost from "../../../../components/dalrun-jy/competition/CompSidebarPost";


import CopyRight from "../../../../components/dalrun-jy/footer/CopyRight";

import HeadermainPage from "../../../../components/dalrun-jy/HeadermainPage";
const CompetitionMain = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-sidebar">
      <Helmet>
        <title>대회 신청</title>
      </Helmet>
      
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
      <div className="ptf-spacer"  style={{ "--ptf-xxl": "7rem", "--ptf-md": "5rem" }}> 
      </div>
        <HeadermainPage />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <div className="ptf-page ptf-page--blog-sidebar">
            {/*=============================================
            Start Blog  Section 
            ============================================== */}
            
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2rem", "--ptf-md": "5rem" }}
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
                      <h5 className="large-heading">이 번달 대회 일정</h5>
                    </div>
                  </div>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "1.875rem" }}
                ></div>
              </div>
              <div className="container-xxl">
                <div
                  className="row"
                  style={{
                    "--bs-gutter-x": "3.75rem",
                    "--bs-gutter-y": "3.75rem",
                  }}
                >
                  <HeaderComp />
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.5rem", "--ptf-md": "3.75rem" }}
              ></div>
            </section>
            {/* End .blog */}

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

            {/*=============================================
            Start Blog With Sidebar  Section 
            ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.5rem", "--ptf-md": "3.75rem" }}
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
                      <div className="ptf-isotope-grid">
                        <ContentComp choice={""} search={""} page={0}/>
                      </div>
                      {/* End .ptf-isotope-grid */}
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{
                        "--ptf-xxl": "9.375rem",
                        "--ptf-md": "4.6875rem",
                      }}
                    ></div>
                  
                  </div>
                  {/* Blog grid  */}
                  <div className="col-xl-4">
                    <div className="ptf-sidebar ptf-sidebar--right">
                      <CompSidebarPost />
                    </div>
                  </div>
                  {/* End sidebar */}
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": " 5rem" }}
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
          
          <div className="ptf-footer__bottom">
            <CopyRight />
          </div>
        </div>
      </footer>
    </div>
    // End .ptf-is--blog-grid
  );
};

export default CompetitionMain;
