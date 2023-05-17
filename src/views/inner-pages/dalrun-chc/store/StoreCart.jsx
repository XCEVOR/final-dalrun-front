import React, { useState } from "react";
import { useLocation } from 'react-router';
import { Helmet } from "react-helmet";
import HeadermainPage from "../../../../components/dalrun-jy/HeadermainPage";import CopyRight from "../../../../components/dalrun-jy/footer/CopyRight";

import Social from "../../../../components/social/Social";



import StoreCartList from "../../../../components/dalrun-hc/storecart/StoreCartList";


function StoreCart() {
  const [checkbox_DisplayMode, setCheckbox_DisplayMode] = useState(true);  // TEST MODE

  const location = useLocation();
  console.log(" location = useLocation(); ", location);

  return checkbox_DisplayMode 
  // USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ 
  ? (
    <>    
    {/* <input type='checkbox' onClick={() =>(setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>USER_MODE */}
    <div className="dalrun_hc">
      <Helmet>
        <title>달런달런 스토어</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeadermainPage />
      {/* End Header */}

      <div className="main">
          <article className="ptf-page ptf-page--single-work-1">
            


            <section>
              <div className="ptf-single-post__wrapper">
                <div className="container-xxl">
                  <div className="row">
                    <StoreCartList />
                  </div>
                </div>
              </div>
            </section>


            
          </article>
          {/* End .ptf-page */}
        </div>


      {/*=============================================
        Start Footer
        ============================================== */}
      <footer className="ptf-footer ptf-footer--style-1">
        <div className="container-xxl">
         
          <div className="ptf-footer__bottom">
            <CopyRight />
          </div>
        </div>
      </footer>
    </div>
    </>
    )


    // DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ 
    : (
      <>    <input type='checkbox' onClick={() => (setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>DEVELOPER_MODE
      <div className="dalrun_hc">
        <Helmet>
          <title>Moonex - Contact</title>
        </Helmet>
        {/* End Page SEO Content */}

        <HeadermainPage />
        {/* End Header */}

        <div className="main">
            <article className="ptf-page ptf-page--single-work-1">
              



              <section>
                <div className="ptf-single-post__wrapper">
                  <div className="container-xxl">
                    <div className="row">
                    <StoreCartList />
                    </div>
                  </div>
                </div>
              </section>





              
            </article>
            {/* End .ptf-page */}
          </div>




        <div className="ptf-main">
          <div className="ptf-page ptf-page--contact">
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
          <StoreCartList />
              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-12">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading">
                        STORE <br />
                        
                      </h1>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "3rem", "--ptf-md": "2.5rem" }}
                      ></div>



                      <div
                        className="ptf-animated-block"
                        data-aos="fade"
                        data-aos-delay="0"
                      >
                        <StoreCartList />
                      </div>



                      <Social />
                      {/* <!--Social Icon--> */}
                    </div>
                  </div>
                </div>
                {/* End .row */}
              </div>
              {/* Contact top portion */}

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
              ></div>



            </section>
            {/* End section contact header */}


          </div>
        </div>

        {/*=============================================
          Start Footer
          ============================================== */}
        <footer className="ptf-footer ptf-footer--style-1">
          <div className="container-xxl">
            <div className="ptf-footer__top">
              
            </div>
            <div className="ptf-footer__bottom">
              <CopyRight />
            </div>
          </div>
        </footer>
      </div>
      </>
    )
}

export default StoreCart;
