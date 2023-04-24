import React, {useState, useRef} from "react";
import SideMenu from "../../../components/dalrun-sh/sideMenu";
import { useLocation } from "react-router";
import { Helmet } from "react-helmet";

import HeaderDefault from "../../../components/header/HeaderDefault";
import Footer from "../../../components/footer/Footer";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import MypageMenu from "../../../components/dalrun-sh/mypageMenu";

import "./sideMenu.css";
import MyInform from "./mypage/MyInform";
import MyCrew from "./mypage/MyCrew";
import MyRunning from "./mypage/MyRunning";
import MyStore from "./mypage/MyStore";
import MyWrite from "./mypage/MyWrite";
import MyRating from "./mypage/MyRating";

const Mypage = () => {

    const location = useLocation();
    const menu = location.pathname.split("/").reverse()[0];
    
    const clickedSideMenu = (m) => {
        if(m === "myinform") {
          return <MyInform />;
        } else if(m === "mycrew") {
          return <MyCrew />;
        } else if(m === "myrunning") {
          return <MyRunning />;
        } else if(m === "mystore") {
          return <MyStore />;
        } else if(m === "mywrite") {
          return <MyWrite />;
        } else if(m === "myrating") {
          return <MyRating />;
        } 
      }  

    return (
        <div className="ptf-site-wrapper animsition ptf-is--works-listing">
          <Helmet>
            <title>MyPage</title>
          </Helmet>
          <div className="ptf-site-wrapper__inner">
             <HeaderDefault />    
            <div className="main container-xxl" style={{display:"flex"}}>
              <MypageMenu />
              {clickedSideMenu(menu)}
            </div>
          </div>
    
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
      );
};

export default Mypage;
