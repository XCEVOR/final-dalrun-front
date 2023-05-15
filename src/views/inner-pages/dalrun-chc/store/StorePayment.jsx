import React, { useState } from "react";
import { Helmet } from "react-helmet";
import HeadermainPage from "../../../../components/dalrun-jy/HeadermainPage";import CopyRight from "../../../../components/dalrun-jy/footer/CopyRight";

import Social from "../../../../components/social/Social";



import StorePaymentUser from "../../../../components/dalrun-hc/storepayment/StorePaymentUser";  // StorePaymentUser 에서
import StorePaymentList from "../../../../components/dalrun-hc/storepayment/StorePaymentList";  // StorePaymentList 으로 데이터 공유.


const StorePayment = () => {
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

        <HeadermainPage />
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
                      <h1 className="large-heading">TOTAL PAYMENT</h1>
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

                    {/* // Component to Component */}
                    <StorePaymentUser
                      pushData={StorePaymentList.pullData}
                      pushOrderNamePackage={StorePaymentList.pullOrderNamePackage}
                      pushOrderAddressPackage={StorePaymentList.pullOrderAddressPackage}
                      pushOrderPhonePackage={StorePaymentList.pullOrderPhonePackage}
                      pushOrderRequirmentPackage={StorePaymentList.pullOrderRequirmentPackage}
                    />
                  </div>
                  {/* End .col */}

                  <div className="col-lg-5">

                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="300"
                    >

                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "3.125rem" }}
                      ></div>

                      {/* // Component to Component */}
                      <StorePaymentList />
                      {/* End ContactForm */}
                    </div>
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
        <Helmet>
          <title>Moonex - Contact</title>
        </Helmet>
        {/* End Page SEO Content */}

        <HeadermainPage />
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
                      <h1 className="large-heading">TOTAL PAYMENT</h1>
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
                    <h1>left</h1>
                    {/* // Component to Component */}
                    <StorePaymentUser
                      pushData={StorePaymentList.pullData}
                      pushOrderNamePackage={StorePaymentList.pullOrderNamePackage}
                      pushOrderAddressPackage={StorePaymentList.pullOrderAddressPackage}
                      pushOrderPhonePackage={StorePaymentList.pullOrderPhonePackage}
                      pushOrderRequirmentPackage={StorePaymentList.pullOrderRequirmentPackage}
                    />
                  </div>
                  {/* End .col */}

                  <div className="col-lg-5">
                    <h1>right</h1>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="300"
                    >
                      <h5 className="fz-14 text-uppercase has-3-color fw-normal">
                        Tell us about your project and goals.
                      </h5>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "3.125rem" }}
                      ></div>

                      {/* // Component to Component */}
                      <StorePaymentList />
                      {/* End ContactForm */}
                    </div>
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

export default StorePayment;
