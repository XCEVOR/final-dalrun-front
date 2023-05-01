import React from "react";
import { Helmet } from "react-helmet";
import { Link, } from "react-router-dom";

import SideMenu from "../../../components/dalrun-sh/sideMenu";
import "./sideMenu.css";

const demoContent = [
  {
    demoImg: "home-default",
    routerPath: "/mypage",
    title: "Mypage",
    delayAnimationTime: "0",
  },
  {
    demoImg: "home-default",
    routerPath: "/mypage/myinform",
    title: "회원정보",
    delayAnimationTime: "0",
  },
  {
    demoImg: "home-default",
    routerPath: "/mypage/mycrew",
    title: "내 크루",
    delayAnimationTime: "0",
  },  {
    demoImg: "home-default",
    routerPath: "/mypage/myrunning",
    title: "내 러닝기록",
    delayAnimationTime: "0",
  },
  {
    demoImg: "home-default",
    routerPath: "/mypage/mystore",
    title: "내 스토어 구매이력",
    delayAnimationTime: "0",
  },  {
    demoImg: "home-default",
    routerPath: "/mypage/mywrite",
    title: "게시글 내역",
    delayAnimationTime: "0",
  },
  {
    demoImg: "home-default",
    routerPath: "/mypage/myrating",
    title: "회원 등급",
    delayAnimationTime: "0",
  }

];

const oshWorkspace = () => {

  return (
    <div className="total-container">
      <div className="left-container">
       <SideMenu />
      </div>

      <div className="right-container">
        <div className="ptf-site-wrapper animsition">
            
          <div className="ptf-site-wrapper__inner">
            {/* <!--Header--> */}
            <main className="ptfmain">

                <section>
                  <div className="container-xxl">
                    {/* <!--Divider--> */}
                    <div
                      className="ptf-divider"
                      style={{
                        "--ptf-height": "1px",
                        "--ptf-color": "var(--ptf-color-14)",
                      }}
                    ></div>
                  </div>
                </section>

                <section id="dalrun">

                  <div className="container-xxl">
                    <div className="row">
                      <div className="col-xl-8">
                        {/* <!--Animated Block--> */}
                        <div
                          className="ptf-animated-block"
                          data-aos="fade"
                          data-aos-delay="0"
                        > 
                        
                          <h2 className="h1">
                            My Page
                            
                          </h2>
                        </div>
                        {/* <!--Spacer--> */}
                        <div
                          className="ptf-spacer"
                          style={{ "--ptf-xxl": "1.875rem" }}
                        ></div>
                        {/* <!--Animated Block--> */}
                        <div
                          className="ptf-animated-block"
                          data-aos="fade"
                          data-aos-delay="100"
                        >
                          <p className="fz-18 has-3-color">
                            안녕하세요. ㅇㅇㅇ님. 좋은 하루 되세요.
                          </p>
                          
                        </div>
                      </div>
                    </div>


                    {/* 글 목록 */}
                    <div
                    className="row"
                    style={{
                      "--bs-gutter-x": "2.5rem",
                      "--bs-gutter-y": "4.6875rem",
                    }}
                  >
                    {demoContent.map((demo, i) => (
                      <div className="col-6 col-lg-4 col-xl-3" key={i}>
                        {/* <!--Animated Block--> */}
                        <div
                          className="ptf-animated-block"
                          data-aos="fade"
                          data-aos-delay={demo.delayAnimationTime}
                        >
                          {/* <!--Demo Item--> */}
                          <div className="ptf-demo-item ptf-demo-item--effect">
                            <div className="ptf-demo-item__image">
                              <Link
                                to={demo.routerPath}
                                rel="noopener noreferrer"
                              >
                                <img
                                  src={`assets/img/root/intro/${demo.demoImg}.png`}
                                  alt={demo.title}
                                  loading="lazy"
                                />
                              </Link>
                            </div>
                            <h5 className="ptf-demo-item__title">
                              <Link
                                to={demo.routerPath}
                                rel="noopener noreferrer"
                              >
                                {demo.title}
                              </Link>
                            </h5>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  </div>

                </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default oshWorkspace;
