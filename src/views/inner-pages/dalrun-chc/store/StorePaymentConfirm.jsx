import React, { useState } from "react";
import { Helmet } from "react-helmet";
import HeaderDefault from "../../../../components/header/HeaderDefault";
import CopyRight from "../../../../components/footer/copyright/CopyRight";
import Footer from "../../../../components/footer/Footer";
import Social from "../../../../components/social/Social";
import ContactForm from "../../../../components/ContactForm";
import Address from "../../../../components/Address";

import StorePaymentSuccess from "../../../../components/dalrun-hc/storepaymentconfirm/StorePaymentSuccess";  


const StorePaymentConfirm = () => {
  const [checkbox_DisplayMode, setCheckbox_DisplayMode] = useState(true);  // TEST MODE

    return checkbox_DisplayMode 
    // USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ USER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ 
    ? (
      <>    <input type='checkbox' onClick={() =>(setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>USER_MODE
      <div className="dalrun_hc">
        <Helmet>
          <title>Moonex - Contact</title>
        </Helmet>
        {/* End Page SEO Content */}

        <HeaderDefault />
        {/* End Header */}

        <div className="ptf-main">
          <div className="ptf-page ptf-page--contact">
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
                      <h1 className="large-heading">TOTAL PAYMENT CONFIRM</h1>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "3rem", "--ptf-md": "2.5rem" }}
                      ></div>

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

            <section>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-lg-7">

                    <StorePaymentSuccess />
                    
                  </div>
                  {/* End .col */}

                </div>
              </div>
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
    </>
    )


    // DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ DEVELOPER_MODE @@@@@ @@@@@ @@@@@ @@@@@ @@@@@ 
    : (
      <>    <input type='checkbox' onClick={() => (setCheckbox_DisplayMode(!checkbox_DisplayMode))}/>DEVELOPER_MODE
        <div className="dalrun_hc">
        

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
      </>
    )
};

export default StorePaymentConfirm;
