import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import HeaderDefault from "../../../../components/header/HeaderDefault";
import CopyRight from "../../../../components/footer/copyright/CopyRight";
import Footer from "../../../../components/footer/Footer";
import Social from "../../../../components/social/Social";
// import WorksCaseStudy from "./WorksCaseStudy";
import ImageGridThree from "../../../../components/image-grid/ImageGridThree";


import BlogComment from "../../../../components/dalrun-hc/storedetails/BlogComment";
import BlogCommentForm from "../../../../components/dalrun-hc/storedetails/BlogCommentForm";
import StoreDetailsPicture from "../../../../components/dalrun-hc/storedetails/StoreDetailsPicture";
import StoreDetailsSelection from "../../../../components/dalrun-hc/storedetails/StoreDetailsSelection";
import StoreDetailsSlider from "../../../../components/dalrun-hc/storedetails/StoreDetailsSlider";
import StoreDetailsCommentForm from "../../../../components/dalrun-hc/storedetails/StoreDetailsCommentForm";
import StoreDetailsCommentList from "../../../../components/dalrun-hc/storedetails/StoreDetailsCommentList";
import CommentAppContext from './StoreAppContext';

import Button from "./Button";
import Toast from "./Toast";



const WorksShowcase = () => {
  const [checkbox_DisplayMode, setCheckbox_DisplayMode] = useState(true);  // TEST MODE
  let prodParams = useParams();
  console.log("prodParams: ", prodParams);
  console.log("prodParams.productCode: ", prodParams.productCode);

  const [productDetails, setProductDetails] = useState();
  const [loading, setLoading] = useState(false);

  const [addCartModal, setAddCartModal] = useState([]);

  const [commentContxData, setCommentContxData] = useState(false);

  

  const productDetailsData = async (productCode) => {
    const resp = await axios.post("http://localhost:3000/getProductData", null, { params: {"productCode": productCode} });
    console.log("resp.data", resp.data);
    setProductDetails(resp.data);

    setLoading(true);  // 이 코드 전에는 div에 productDetails.productName 등등 적용안됨.
  }

  useEffect(() => {
    productDetailsData(prodParams.productCode);
  }, [prodParams.productCode])

  if(loading === false){
    return <div>Loading...</div>
  }


  let toastProperties = null;
  const showToast = (type) => {
    switch (type) {
      case "success":
        toastProperties = {
          id: addCartModal.length + 1,
          title: "Success",
          description: "This is a success toast component",
          backgroundColor: "#999"
        };
        break;
      default:
        toastProperties = [];
    }
    setAddCartModal([...addCartModal, toastProperties]);
  };






  return checkbox_DisplayMode 
  // USER_MODE
  ? (
    <>
    <CommentAppContext.Provider value={{ commentContxData, setCommentContxData }}>
    <input type='checkbox' onClick={() =>(setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>USER_MODE
    <div className="dalrun_hc">
    <div className="ptf-site-wrapper animsition ptf-is--work-showcase-1">
      <Helmet>
        <title>STORE DETAILS</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <article className="ptf-page ptf-page--single-work-1">
            



            <section>
              <div className="ptf-single-post__wrapper">
                <div className="container-xxl">
                  <div className="row">
                    <div className="col-xl-8">
                      <div className="picture_container">
                        <StoreDetailsPicture />
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="selection_container">
                        <StoreDetailsSelection />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>



            <section>
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                 
                      <StoreDetailsSlider />
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
                      <StoreDetailsCommentList />
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
                      <StoreDetailsCommentForm />
                </div>
                
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "32.25rem", "--ptf-md": "1rem" }}
              ></div>
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
    </div>
    // End .ptf-is--blog-grid
    </CommentAppContext.Provider>
    </>
    )


    // DEVELOPER_MODE
    : (
      <>
      <CommentAppContext.Provider value={{ commentContxData, setCommentContxData }}>
      <input type='checkbox' onClick={() => (setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>DEVELOPER_MODE
      <div className="dalrun_hc">


    <div>
      <h1>React Toast Component</h1>
      <div>
        <Button handleClick={() => showToast("success")}>Success</Button>
        {/* <button onClick={() => showToast("success")}>Success</button> */}
      </div>
      <Toast
        toastlist={addCartModal}
        position="top-right"
        setAddCartModal={setAddCartModal}
      />
    </div>



    <div className="ptf-site-wrapper animsition ptf-is--work-showcase-1">
      <Helmet>
        <title>STORE DETAILS</title>
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
                        상품 NAME: {productDetails[0].productName} <br />
                      </h1>
                      <h2 className="large-heading">
                        상품 ID: {productDetails[0].productCode} <br />
                        상품 CATEGORY: {productDetails[0].productCategory} <br />
                        상품 PRICE: {productDetails[0].productPrice} <br />
                      </h2>
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
                  {/* <WorksCaseStudy /> */}
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.25rem", "--ptf-md": "1rem" }}
              ></div>
            </section>



            <section>
              <div className="ptf-single-post__wrapper">
                <div className="container-xxl">
                  <div className="row">
                    <div className="col-xl-8"><h2>left</h2>
                      <StoreDetailsPicture />
                    </div>

                    <div className="col-xl-4"><h2>right</h2>
                      <StoreDetailsSelection />
                    </div>
                  </div>
                </div>
              </div>
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
                      <StoreDetailsCommentList />
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
                      <StoreDetailsCommentForm />
                </div>
                
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "32.25rem", "--ptf-md": "1rem" }}
              ></div>
            </section>




            <section>

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




            {/* <!--Post Wrapper--> */}
            {/* <div className="ptf-single-post__wrapper"> */}
            <div className="container-xxl">
              <div className="row">
                {/* <!--Comments--> */}
                <div className="col-xl-8">
                  <section className="ptf-page-comments">
                    {/* <!--Comments list--> */}
                    <div className="ptf-page-comments__list">
                      <h2 className="ptf-page-comments__title">03 Comments:</h2>
                      <BlogComment />
                    </div>

                    {/* <!--Comments form--> */}
                    <div className="ptf-page-comments__form">
                      <h2 className="ptf-page-comments__title">
                        Leave a comment:
                      </h2>
                      <BlogCommentForm />
                    </div>
                  </section>
                </div>
              </div>
            </div>
            {/* </div> */}




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
    </div>
    // End .ptf-is--blog-grid
    </CommentAppContext.Provider>
    </>
    )
};

export default WorksShowcase;
