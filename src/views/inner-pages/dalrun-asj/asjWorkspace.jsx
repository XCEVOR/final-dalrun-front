import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const demoContent = [
  {
    demoImg: "home-default",
    routerPath: "/admin",
    title: "관리자 페이지",
    delayAnimationTime: "0",
  },
  {
    demoImg: "home-default",
    routerPath: "/admin/dashboard",
    title: "대시보드",
    delayAnimationTime: "0",
  },
  {
    demoImg: "home-default",
    routerPath: "/admin/members",
    title: "회원 관리",
    delayAnimationTime: "0",
  },
  {
    demoImg: "home-default",
    routerPath: "/admin/bbs",
    title: "게시물 관리",
    delayAnimationTime: "0",
  },
  {
    demoImg: "home-default",
    routerPath: "/admin/store",
    title: "쇼핑몰 관리",
    delayAnimationTime: "0",
  },
  {
    demoImg: "home-default",
    routerPath: "/admin/chart",
    title: "차트",
    delayAnimationTime: "0",
  },

];

const asjWorkspace = () => {
  return (
    <div className="ptf-site-wrapper animsition">
      <Helmet>
        <title>Moonex - Preview</title>
      </Helmet>
      
      <div className="ptf-site-wrapper__inner">
        {/* <!--Header--> */}
        <main className="ptfmain">
          <article
            className="ptf-page ptf-page--intro"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "assets/img/root/intro/bubble-1.png"
              })`,
            }}
          >
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
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>

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
                        달런 달런
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
                        No-clutter demos with only necessasry design elements
                        for maximum attention to your work.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                ></div>

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



              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

          </article>
        </main>
      </div>

      {/* <!--Footer--> */}
      <footer
        className="ptf-footer ptf-footer--landing"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "assets/img/root/intro/bubble-3.png"
          })`,
        }}
      >
        {/* <!--Spacer--> */}
        <div
          className="ptf-spacer"
          style={{ "--ptf-xxl": "18.125rem", "--ptf-md": "9.0625rem" }}
        ></div>
        <div className="container-xxl text-center">
          <div className="row">
            <div className="col-xl-6 offset-xl-3">
              <h2 className="h1">Purchase For Only</h2>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "1.25rem" }}
              ></div>
              <div className="ptf-footer__price">
                <span>$</span>19
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "0.625rem" }}
              ></div>
              {/* <!--Button--> */}
              <a
                className="ptf-btn ptf-btn--success"
                href="https://themeforest.net/item/moonex-portfolio-agency-react-template/35431456"
                target="_blank"
              >
                Purchase Now
              </a>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": " 4.375rem" }}
              ></div>
              <p className="fz-18 has-3-color">
                Limited time offer. The originally price will back after end of{" "}
                <br />
                promotion. Don't Miss Out!!!
              </p>
            </div>
          </div>
        </div>
        {/* <!--Spacer--> */}
        <div
          className="ptf-spacer"
          style={{ "--ptf-xxl": "16.25rem", "--ptf-md": "8.125rem" }}
        ></div>
      </footer>
    </div>
  );
};

export default asjWorkspace;
