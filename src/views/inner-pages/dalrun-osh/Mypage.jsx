import React, {useState, useRef} from "react";

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

import { Routes, Route } from "react-router-dom";

const Mypage = () => {

    return (
        <div className="ptf-site-wrapper animsition ptf-is--works-listing">
          <Helmet>
            <title>MyPage</title>
          </Helmet>
          <div className="ptf-site-wrapper__inner">
             <HeaderDefault />  

            <div className="main container-xxl" style={{display:"flex"}}>
              <MypageMenu />
              <Routes>
                <Route path="myinform" element={<MyInform />} />
                <Route path="mycrew" element={<MyCrew />} />
                <Route path="myrunning" element={<MyRunning />} />
                <Route path="mystore" element={<MyStore />} />
                <Route path="mywrite" element={<MyWrite />} />
                <Route path="myrating" element={<MyRating />} />         
              </Routes>
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
