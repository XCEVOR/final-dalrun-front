import React from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import StoreRecommend1Row from "../../../../components/dalrun-hc/storerecommend/StoreRecommend1Row";
import StoreRecommendPhoto from "../../../../components/dalrun-hc/storerecommend/StoreRecommendPhoto";
import StoreRecommendFloatingBtn from "../../../../components/dalrun-hc/storerecommend/StoreRecommendFloatingBtn";
import StoreCartFloatingBtn from "./StoreCartFloatingBtn";


const StoreRecommend = () => {
  let prodParams = useParams();
  console.log("prodParams: ", prodParams);
  console.log("prodParams.productCode: ", prodParams.productCode);

  let storage_memId = "x";
  let json_login = localStorage.getItem("login");
  if (json_login === null) storage_memId = "user01test";
  else storage_memId = JSON.parse(json_login).memId;



  return (
    <div className="dalrun-hc">
      <StoreRecommendFloatingBtn productCode={prodParams.productCode}/>
      <StoreCartFloatingBtn storage_memId={storage_memId}/>
      <div className="ptf-site-wrapper animsition ptf-is--home-agency">
        <Helmet>
          <title>Moonex - Home Agency</title>
        </Helmet>
        {/* End Page SEO Content */}

        <div className="ptf-site-wrapper__inner">
         
          {/* End Header Agency */}

          <div className="ptf-main">
            <div className="ptf-page ptf-page--home-agency">
              {/*=============================================
            Start Our Hero Section howcase 3
            ============================================== */}
              <div className="ptf-showcase-3 swiper-container">
                <div className="swiper-wrapper">
                  <StoreRecommend1Row />
                </div>
              </div>

              {/*=============================================
            Start Call to Counter section
            ============================================== */}
              <section>
              
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "3.75rem" }}
                ></div>
              </section>

              <section>
                <div className="container">
                  {/* <!--Divider--> */}
                  <div className="ptf-divider"></div>
                </div>
              </section>
              {/* End .ptf-devider */}

              <section>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "8.125rem", "--ptf-md": "4.0625rem" }}
                ></div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-7">
                      {/* <!--Animated Block--> */}
                      <div
                        className="ptf-animated-block"
                        data-aos="fade"
                        data-aos-delay="0"
                      >
                        <h2 className="h1 large-heading has-accent-1">
                          Creative Design & Advertising
                        </h2>
                      </div>
                    </div>
                    <div className="col-xl-5 d-none d-xl-block">
                      {/* <!--Animated Block--> */}
                      <div
                        className="ptf-animated-block"
                        data-aos="fade"
                        data-aos-delay="100"
                      >
                        <div className="has-black-color fz-90 lh-1 text-end">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            style={{ height: "1em" }}
                            viewBox="0 0 17 17"
                          >
                            <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                ></div>
              </section>
              {/* End  Advertising Big Title */}

              <section className="dalrun-hc recommend">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-5 offset-lg-7">
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "8.125rem", "--ptf-lg": "0" }}
                      ></div>
                      {/* <!--Animated Block--> */}
                      <div
                        className="ptf-animated-block"
                        data-aos="fade"
                        data-aos-delay="0"
                      >
                        <h6 className="fz-16 has-accent-1 text-uppercase">
                          About Us
                        </h6>
                        {/* <!--Spacer--> */}
                        <div
                          className="ptf-spacer"
                          style={{ "--ptf-xxl": "1.875rem" }}
                        ></div>
                        <h3 style={{ maxWidth: "30rem" }}>
                          We bring trusted solutions for your business
                        </h3>
                        {/* <!--Spacer--> */}
                        <div
                          className="ptf-spacer"
                          style={{ "--ptf-xxl": "5rem", "--ptf-md": "2.5rem" }}
                        ></div>
                        <p className="fz-18" style={{ maxWidth: "30rem" }}>
                          We help our client suceed by creating identities,
                          digital experiences, and printmaterials that communicate
                          clearly, achieve marketing goals, and look fantastic.
                        </p>
                        <p className="fz-18" style={{ maxWidth: "30rem" }}>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in
                          some form, by injected humour
                        </p>
                      </div>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "8.125rem", "--ptf-lg": "0" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </section>


              <section>
                <div>
                  <StoreRecommendPhoto 
                    imageSrc="https://m.media-amazon.com/images/S/aplus-media-library-service-media/b562caba-2fdd-4643-9738-f61ec855c287.__CR0,0,1464,600_PT0_SX1464_V1___.png"
                    title="testestes11"
                    description="asdfkahjsdflhsdf"
                  />
                </div>
                <div>
                  <StoreRecommendPhoto 
                    imageSrc="https://m.media-amazon.com/images/S/aplus-media-library-service-media/5f8a4ff6-9737-4622-b05a-3583e582f9a1.__CR0,0,1464,600_PT0_SX1464_V1___.png"
                    title="testestes2222"
                    description="asdfkahjsdflhsdf"
                  />
                </div>
                <div>
                  <StoreRecommendPhoto 
                    imageSrc="https://m.media-amazon.com/images/S/aplus-media-library-service-media/66364c1c-78ff-4a49-90a5-9a610b564631.__CR0,0,1464,600_PT0_SX1464_V1___.png"
                    title="testestes2222"
                    description="asdfkahjsdflhsdf"
                  />
                </div>
                <div>
                  <StoreRecommendPhoto 
                    imageSrc="https://m.media-amazon.com/images/S/aplus-media-library-service-media/c387e244-cb21-4508-a022-71d306389533.__CR0,0,1464,600_PT0_SX1464_V1___.png"
                    title="testestes2222"
                    description="asdfkahjsdflhsdf"
                  />
                </div>
              </section>
              {/* End  Advertising Banner */}

            
              {/*=============================================
            Start Footer section
            ============================================== */}
              <footer className="ptf-footer ptf-footer--style-3">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-10 offset-xl-2">
                      <div className="ptf-footer__top">
                     
                      </div>
                      {/* End .ptf-footer__top */}

                      <div className="ptf-footer__bottom">
                    
                      </div>
                      {/* End .ptf-footer__bottom */}
                    </div>
                  </div>
                </div>
              </footer>
            </div>
            {/* End .ptf-page */}
          </div>
          {/* End .ptf-main */}
        </div>
        {/* End .ptf-site-wrapper__inner */}
      </div>
    </div>
  );
};

export default StoreRecommend;
