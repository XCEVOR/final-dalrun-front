import CopyRight from "../../components/dalrun-jy/footer/CopyRight";
import CrewRoleFooter from "../../components/dalrun-jy/footer/CrewRoleFooter";

import TeammainPage from "../../components/dalrun-jy/Weekshop_mainPage";
import Headermain from "../../components/dalrun-jy/Headermain";
import HeromainPage from "../../components/dalrun-jy/HeromainPage";
import Dotmap from "../../components/dalrun-jy/dotmap";
import Ad from "../../components/dalrun-jy/ad";




import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const MainFirst = () => {
  const [mycrewinfo, setmycrewinfo] = useState([]);

  function Changemycrewinfo(info) {
    setmycrewinfo(info);

  }

  const [login, setLogin] = useState([]);

  function Changelogininfo(info) {
    setLogin(info);

  }

  useEffect(() => {

  }, [mycrewinfo]);

  return (

    <div className="ptf-site-wrapper animsition ptf-is--home-dark">
      <Helmet>
        <title>메인 페이지</title>
      </Helmet>
      {/* End Page SEO Content */}

      <Headermain />
      {/* End Header Default */}

      <div className="ptf-site-wrapper__inner"  style={{backgroundImage:'url(assets/img/dalrun-jy/space11.gif)'}}>
        <div className="ptf-main">
          <div className="ptf-page ptf-page--home-default" style={{position:'relative'}}>
          <Ad left={20} image={"ad.png"}/>

            <section>
              <Dotmap main={false}  mycrewinfo={mycrewinfo} Changemycrewinfo={Changemycrewinfo} login={login} Changelogininfo={Changelogininfo} />
            </section>
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "2rem" }}
            ></div>

            <section>

              <CrewRoleFooter />

            </section>
          </div>
        </div>
        {/* End .ptf-main */}

        {/* <!--Footer--> */}


        <footer className="ptf-footer ptf-footer--style-5">
          <div className="container-xxl" >
            <div className="ptf-footer__bottom">
              <CopyRight />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainFirst;
