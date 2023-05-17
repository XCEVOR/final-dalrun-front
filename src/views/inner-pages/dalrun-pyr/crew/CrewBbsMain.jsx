import React from 'react';
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';
import HeadermainPage from "../../../../components/dalrun-jy/HeadermainPage";

import CrewBlogThree from '../../../../components/dalrun-pyr/crewBbs/CrewBlogThree';
import CopyRight from '../../../../components/dalrun-jy/footer/CopyRight';

import CrewBbsGridContent from '../../../../components/dalrun-pyr/crewBbs/CrewBbsGridSLider';

import '../css/CrewBbsMain.css';

const CrewBbsMain = () => {
  const history = useNavigate();
  const gotoWrite = () => {
    history("/crewBbsWrite");
  }
  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>달런달런 - 크루 페이지</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeadermainPage />
        {/* End  Header */}

        <div className="main">
          <div className="ptf-page ptf-page--blog-grid">
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>

              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-8 col-lg-8">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading">🏃‍♀️Crew🏃</h1>
                    </div>
                  </div>
                  {/* End .col */}
                  <div className="col-xl-3 offset-xl-1 col-lg-4">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      {/* <div className="ptf-widget ptf-widget-search">
                        <CrewSearchBlog />
                      </div> */}
                      <br></br>
                      {/* <Link to="/crewBbsWrite">크루 생성</Link> */}
                      {/* <button className="crewwrite" type="button" onClick={gotoWrite}>
                        <div className="btnTwo">
                          <span className="btnText">크루 생성</span>
                          <span className="btnText2">GO!</span>
                        </div>
                      </button> */}
                    </div>
                    <div id="holder" onClick={gotoWrite}>
                        <div class="button_write">
                            <p class="btnText">크루 생성</p>
                            <div class="btnTwo">
                              <p class="btnText2">GO!</p>
                            </div>
                        </div>
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
            </section>

            {/*=============================================
            Start Blog Grider section
            ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.25rem", "--ptf-md": "2.125rem" }}
              ></div>
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div className="ptf-news-slider swiper-container">
                    <div className="swiper-wrapper">
                    {/* 달런달런 밑에 사진 */}
                      <CrewBbsGridContent/>
                    </div>
                    {/* End swiper-wrapper */}
                  </div>
                </div>
                {/* End .ptf-animated-block */}
              </div>
              {/* End .container-xxl */}

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
                    "--ptf-height": "1px",
                    "--ptf-color": "var(--ptf-color-14)",
                  }}
                ></div>
              </div>
            </section>
            {/* End continaer devider */}

            {/*=============================================
            Start Blog Grid section
            ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
              ></div>

              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div
                    className="ptf-isotope-grid row"
                    style={{
                      "--bs-gutter-x": "3rem",
                      "--bs-gutter-y": "3rem",
                    }}
                  >
                    {/* 게시글 list */}
                    <CrewBlogThree />
                    {/* <CrewBbsList/> */}
                  </div>
                </div>
                {/* End .ptf-animated-block */}

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                ></div>

                <div className="text-center">
                  {/* <!--Animated Block--> */}
                  {/* <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <a className="ptf-load-more" href="#">
                      More
                    </a>
                  </div> */}
                </div>
                {/* End More Blog btn */}

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                ></div>
              </div>
              {/* End .container-xxl */}
            </section>
            {/* End blog gird */}

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
            Start Newsletter section
            ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "9.375rem", "--ptf-md": "4.6875rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading">Newsletter</h1>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.25rem" }}
                      ></div>
                      <p>Get the latest news & insight.</p>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-lg": "3.75rem", "--ptf-md": "1.875rem" }}
                    ></div>
                  </div>
                  <div className="col-lg-6 offset-lg-2">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      {/* <!--Spacer--> */}
                      {/* <NewsletterTwo /> */}
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

export default CrewBbsMain;