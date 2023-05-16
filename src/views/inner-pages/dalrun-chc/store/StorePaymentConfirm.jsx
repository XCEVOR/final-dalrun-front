import React, { useState } from "react";
import { Helmet } from "react-helmet";
import HeadermainPage from "../../../../components/dalrun-jy/HeadermainPage";import CopyRight from "../../../../components/dalrun-jy/footer/CopyRight";

import Social from "../../../../components/social/Social";



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



            </section>
            {/* End section contact header */}

            <section>
              <div className="container-xxl">
                <div className="row">

                    <StorePaymentSuccess />
                    

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

export default StorePaymentConfirm;
