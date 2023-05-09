
import { Helmet } from "react-helmet";
import HeaderDefault from "../../../components/header/HeaderDefault";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import "../../../assets/mjy-assets/css/compcss.css"

import React, { useState, useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import NaverMapView from "./NaverMapview";
import axios from 'axios';
import CompetitionComment from "../../../components/dalrun-jy/competition/competionComment";

const CompetitionDetails = () => {
  const params = useParams();

  const mapElement = useRef(null);
  const [compBbs, setCompBbs] = useState([]);

  function getCompBbs(compSeq) {
    axios.get("http://localhost:3000/getCompBbs", { params: { 'compSeq': compSeq } })
      .then(function (resp) {
        console.log(resp.data)
        setCompBbs(resp.data);
      }).catch(function (err) {
        alert(err);
      })
  }

  useEffect(() => {
    getCompBbs(params.compSeq);

  }, []);


  useEffect(() => {
    console.log(compBbs);
  }, [compBbs])


  return (
    <div className="ptf-site-wrapper animsition ptf-is--work-showcase-1">
      {/* <NaverMapView mapLat={`${compList.locationLat}`} mapLng={`${compList.locationLng}`}/> */}
      <Helmet>
        <title>대회 상세페이지</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <article className="ptf-page ptf-page--single-work-1">
            <section >
              <div className="container-xxl" >
                <h2 className="large-heading">
                  대회 일정
                </h2>
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5rem", "--ptf-md": "5rem" }}
                >

                </div>
                <div className="row">
                  <div className="col-xl-4">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <img
                        // src={`../assets/img/dalrun-jy/${compBbs.compimage}`}
                        src={`http://localhost:3000/dalrun-hc/competition/${compBbs.compimage}`}
                        loading="lazy"
                        style={{ position: 'relative' }}

                      />
                    </div>


                  </div>
                  <div className="col-xl-6" >
                    <div className="row">

                      <div
                        className="ptf-animated-block"
                        data-aos="fade"
                        data-aos-delay="0"
                      >
                        <h2 className="large-heading">
                          {compBbs.compTitle}
                        </h2>
                        <div
                          className="ptf-spacer"
                          style={{ "--ptf-xxl": "2rem", "--ptf-md": "3.125rem" }}
                        />


                      </div>
                      <div className="col-xl-6" >
                        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
                          <h5 className="fz-14 text-uppercase has-3-color fw-normal">일시</h5>
                          {/* <!--Spacer--> */}
                          <p className="fz-20 lh-1p5 has-black-color">
                            {compBbs.compDateStart} ~ {compBbs.compDateEnd}

                          </p>
                        </div>

                        <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>

                        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
                          <h5 className="fz-14 text-uppercase has-3-color fw-normal">접수 기간</h5>
                          {/* <!--Spacer--> */}
                          <p className="fz-20 lh-1p5 has-black-color">
                            {compBbs.receiptStart} ~ {compBbs.receiptEnd}

                          </p>
                        </div>
                        <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>


                        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
                          <h5 className="fz-14 text-uppercase has-3-color fw-normal">장소</h5>
                          {/* <!--Spacer--> */}
                          <p className="fz-20 lh-1p5 has-black-color">
                            {compBbs.compLocation}

                          </p>
                        </div>

                        <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
                        
                      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
                          <h5 className="fz-14 text-uppercase has-3-color fw-normal">홈페이지</h5>
                          {/* <!--Spacer--> */}
                          <p className="fz-20 lh-1p5 has-black-color">
                           <a className="ptf-btn ptf-btn--primary ptf-btn--inversed" href={compBbs.compLink}>홈페이지 방문하기</a>

                          </p>
                        </div>
            
                      </div>

                      <div className="col-xl-6" >

                        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
                          <h5 className="fz-14 text-uppercase has-3-color fw-normal">주최측</h5>
                          {/* <!--Spacer--> */}
                          <p className="fz-20 lh-1p5 has-black-color">
                          {compBbs.compSponsor}

                          </p>
                        </div>
                        <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>

                        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
                          <h5 className="fz-14 text-uppercase has-3-color fw-normal">장소</h5>
                          {/* <!--Spacer--> */}
                          <p className="fz-20 lh-1p5 has-black-color">
                            {compBbs.compLocation}

                          </p>
                        </div>
                        <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>


                        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
                          <h5 className="fz-14 text-uppercase has-3-color fw-normal">조회수</h5>
                          {/* <!--Spacer--> */}
                          <p className="fz-20 lh-1p5 has-black-color">
                            {compBbs.readcount}

                          </p>
                        </div>
                        <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>


                    
                      </div>



                       
       
                    </div>
                    {/* <a
                      className="ptf-social-icon ptf-social-icon--style-3"
                      href="#"
                      target="_blank"
                    >
                      <div style={{ border: '1px solid black' }}>
                        <img id="likeimg" src={`../assets/img/dalrun-jy/like.png`} />
                      </div>
                    </a> */}
                  </div>

                  {/* End .col */}
                  {/* <WorksCaseStudy /> */}
                </div>
              </div>
              {/* <!--Spacer--> */}

            </section>


            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "5rem", "--ptf-md": "3.125rem" }}
              />

              <div className="container">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2>대회 소개</h2>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "1.5625rem" }}
                ></div>
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <p className="fz-30 has-black-color">
                    {compBbs.compContent}
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
                  <h2>대회 위치</h2>
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
                  <NaverMapView mapLat={`${compBbs.locationLat}`} mapLng={`${compBbs.locationLng}`} />

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


                  <CompetitionComment compSeq={`${compBbs.compSeq}`} />

                </div>

                {/* <!--Animated Block--> */}
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

          <div className="ptf-footer__bottom">
            <CopyRight />
          </div>
        </div>
      </footer>
    </div>
    // End .ptf-is--blog-grid
  );
};

export default CompetitionDetails;
