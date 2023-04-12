import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./menu/MobileMenu";

const HeaderMinimal = () => {
  const [click1, setClick1] = useState(false);
  const handleClick1 = () => setClick1(!click1);
  return (
    <>
      <header className="ptf-header ptf-header--style-6">
        <div className="ptf-navbar ptf-navbar--main ptf-navbar--transparent">
          <div className="container-xxl">
            <div className="ptf-navbar-inner">
              {/* <!--Logo--> */}
              <Link className="ptf-navbar-logo" to="/">
                <img
                  className="black"
                  src="assets/img/root/logo-dark.png"
                  alt="logo"
                  loading="lazy"
                />
                <img
                  className="white"
                  src="assets/img/root/logo-white.png"
                  alt=""
                  loading="lazy"
                />
              </Link>
              {/* <!--Buttons--> */}

              {/* <!--Offcanvas Menu Toggle--> */}
              <div
                className="ptf-offcanvas-menu-icon js-offcanvas-menu-toggle"
                onClick={handleClick1}
              >
                <i className="lnir lnir-menu-alt-5"></i>
              </div>
              {/* Toggle bar icon */}
              {/* <!--Language switcher--> */}
              <ul className="ptf-language-switcher">
                <li>
                  <a href="#">English</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {/* End header */}
      <div
        className={
          click1 ? "ptf-offcanvas-menu is-open" : "ptf-offcanvas-menu "
        }
      >
        <div className="ptf-offcanvas-menu__header">
          <div className="ptf-language-switcher">
            <a className="is-active" href="#">
              Eng
            </a>
            <a href="#">Fra</a>
            <a href="#">Ger</a>
          </div>
          <span
            className="ptf-offcanvas-menu-icon js-offcanvas-menu-toggle"
            onClick={handleClick1}
          >
            <i className="lnir lnir-close"></i>
          </span>
        </div>
        {/* End .ptf-offcanvas-menu__header */}

        <MobileMenu />
      </div>
      {/* End sidebar menu */}
    </>
  );
};

export default HeaderMinimal;
