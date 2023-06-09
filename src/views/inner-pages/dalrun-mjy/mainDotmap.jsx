import CopyRight from "../../../components/dalrun-jy/footer/CopyRight";
import CrewRoleFooter from "../../../components/dalrun-jy/footer/CrewRoleFooter";

import TeammainPage from "../../../components/dalrun-jy/Weekshop_mainPage";


import HeadermainPage from "../../../components/dalrun-jy/HeadermainPage";



import HeromainPage from "../../../components/dalrun-jy/HeromainPage";
import Dotmap from "../../../components/dalrun-jy/dotmap";
import DotMapInfo from "../../../components/dalrun-jy/dotmapinfo";


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const MainDotMap = () => {
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

    <div className="ptf-site-wrapper animsition  ptf-is-default">
      <Helmet>
        <title>메인 페이지</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeadermainPage />
      {/* End Header Default */}

      <div className="ptf-site-wrapper__inner">
        <div className="ptf-main">
          <div className="ptf-page ptf-page--home-default" >
            <section>
              <Dotmap mycrewinfo={mycrewinfo} Changemycrewinfo={Changemycrewinfo} login={login} Changelogininfo={Changelogininfo} />
            </section>
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "2rem" }}
            ></div>

            <section>
              <div
                className="row"
                style={{ "--bs-gutter-x": "2rem", "--bs-gutter-y": "2.5rem"}}

                
              >
                
                <DotMapInfo mycrewinfo={mycrewinfo} Changemycrewinfo={Changemycrewinfo} login={login} Changelogininfo={Changelogininfo} />
              </div>
            </section>

            <section>

              <CrewRoleFooter />

            </section>
          </div>
        </div>
        {/* End .ptf-main */}

        {/* <!--Footer--> */}


        <footer className="ptf-footer ptf-footer--style-1">
          <div className="container-xxl">
            <div className="ptf-footer__bottom">
              <CopyRight />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainDotMap;
