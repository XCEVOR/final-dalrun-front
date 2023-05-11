
import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";

import { Link, useParams } from "react-router-dom";
import NaverMapView from "./NaverMapview";
import axios from 'axios';

import ReviewComment from "../../../components/dalrun-jy/review/ReviewComment";
import DetailContentReview from "../../../components/dalrun-jy/review/DetailContentReview";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import HeaderDefault from "../../../components/header/HeaderDefault";

const ReviewDetails = () => {
  const params = useParams();

  const mapElement = useRef(null);
  const [reviewBbs, setReviewBbs] = useState([]);

  function getReviewBbs(srSeq) {
    axios.get("http://localhost:3000/getReviewBbs", { params: { 'srSeq': srSeq } })
      .then(function (resp) {
        console.log(resp.data)
        setReviewBbs(resp.data);
      }).catch(function (err) {
        alert(err);
      })
  }

  function WriteformOn(){
    document.getElementById('Writeform').style.display='block';
    document.getElementById('WriteButton').style.display='none';

  }
  function WriteformOff(){
    document.getElementById('Writeform').style.display='none';
    document.getElementById('WriteButton').style.display='block';

  }

  useEffect(() => {
    getReviewBbs(params.srSeq);

  }, []);


  useEffect(() => {
    console.log(reviewBbs);
  }, [reviewBbs])


  return (
    <div className="ptf-site-wrapper animsition ptf-is--work-showcase-1">
      {/* <NaverMapView mapLat={`${compList.locationLat}`} mapLng={`${compList.locationLng}`}/> */}
      <Helmet>
        <title>리뷰 상세페이지</title>
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
                  운동화 리뷰
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
                        src={`http://localhost:3000/dalrun-jy/shoereview/shoe_${reviewBbs.srSeq}.jpg`}

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
                          {reviewBbs.srTitle}
                        </h2>

                        </div>
                        <div
                          className="ptf-spacer"
                          style={{ "--ptf-xxl": "2rem", "--ptf-md": "3.125rem" }}
                        />
                        <div className="col-xl-6" >

                          <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
                            <h5 className="fz-14 text-uppercase has-3-color fw-normal">brand</h5>
                            {/* <!--Spacer--> */}
                            <p className="fz-20 lh-1p5 has-black-color">
                              {reviewBbs.srBrand}

                            </p>
                          </div>


                          <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
                          <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
                            <h5 className="fz-14 text-uppercase has-3-color fw-normal">출시일</h5>
                            {/* <!--Spacer--> */}
                            <p className="fz-20 lh-1p5 has-black-color">
                              {reviewBbs.srwdate}

                            </p>
                          </div>
                          <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>



                        </div>

                        <div className="col-xl-6" >


                          <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
                            <h5 className="fz-14 text-uppercase has-3-color fw-normal">가격</h5>
                            {/* <!--Spacer--> */}
                            <p className="fz-20 lh-1p5 has-black-color">
                              {reviewBbs.srPrice} 원

                            </p>
                          </div>

                          <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>

                          <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
                            <h5 className="fz-14 text-uppercase has-3-color fw-normal">조회수</h5>
                            {/* <!--Spacer--> */}
                            <p className="fz-20 lh-1p5 has-black-color">
                              {reviewBbs.readcount}

                            </p>
                          </div>




                      </div>




                      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
                        <h5 className="fz-14 text-uppercase has-3-color fw-normal">homepage</h5>
                        {/* <!--Spacer--> */}
                        <a className="ptf-btn ptf-btn--primary ptf-btn--inversed" href={reviewBbs.srLink}>홈페이지 방문하기</a>

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
            </section>


            <section>

              <div className="container">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2>운동화 설명</h2>
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
                    {reviewBbs.srCotent}
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


                  <div className="ptf-isotope-grid">
                    {/* <!--Animated Block--> */}
                    <DetailContentReview srSeq={`${reviewBbs.srSeq}`} />
                  </div>
                </div>

                
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "2.25rem", "--ptf-md": "3.125rem" }}
                >

                </div>
              

                
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <ReviewComment srSeq={`${reviewBbs.srSeq}`} />

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

export default ReviewDetails;
