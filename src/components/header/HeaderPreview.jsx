import React from "react";
import { Link } from "react-router-dom";

const HeaderPreview = () => {
  return (
    <header className="ptf-header ptf-header--landing">
      <div className="ptf-navbar ptf-navbar--main ptf-navbar--sticky">
        <div className="container-xxl">
          <div className="ptf-navbar-inner">
            {/* <!--Logo--> */}
            <Link className="ptf-navbar-logo" to="/">
              <img
                className="black"
                src="assets/img/root/logo-dark.png"
                alt=""
                loading="lazy"
              />
              <img
                className="white"
                src="assets/img/root/logo-white.png"
                alt="brand"
                loading="lazy"
              />
            </Link>
            {/* <!--Navigation--> */}
            <nav className="ptf-nav ptf-nav--default">
              {/* <!--Menu--> */}
              <ul className="sf-menu sf-menu-onepage">
                <li>
                  <a href="#demo">
                    <span>Demo</span>
                  </a>
                </li>
                <li>
                  <a href="#portfolio">
                    <span>Portfolio</span>
                  </a>
                </li>
                <li>
                  <a href="#blog">
                    <span>Blog</span>
                  </a>
                </li>
                <li>
                  <a href="#pages">
                    <span> Pages</span>
                  </a>
                </li>
              </ul>
            </nav>
            {/* <!--Button--> */}
            {/* <a
              className="ptf-btn ptf-btn--underlined"
              href="https://themeforest.net/item/moonex-portfolio-agency-react-template/35431456"
              target="_blank"
            >
              Purchase Now $19
            </a> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderPreview;
