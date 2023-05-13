import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../form/Search";
import DropdownMenu from "./menu/DropdownMenu";
import MobileMenu from "./menu/MobileMenu";
import LoginFormMenu from "./menu/LoginFormMenu";

const Headermain = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [click1, setClick1] = useState(false);
  const handleClick1 = () => setClick1(!click1);

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <header className="ptf-header--style-5">
        <div
          className={
            navbar
              ? "ptf-navbar ptf-navbar--main ptf-navbar--sticky ptf-navbar--fixed"
              : "ptf-navbar ptf-navbar--main ptf-navbar--sticky"
              
          }
          style={{backgroundImage:'url(assets/img/dalrun-jy/space11.gif)' }}
          
        >
          <div className="container-xxl" style={{maxWidth:'100%'}}>
            <div className="ptf-navbar-inner">
              {/* <!--Logo--> */}
              
                <Link className="ptf-navbar-logo" to="/">
               
                <img
                  className="black"
                  src="logo.png"
                  alt=""
                  loading="lazy"
                  
                />
                <img
                  className="white"
                  src="logo.png"
                  alt="brand"
                  loading="lazy"
                />
                
              </Link>
   
              {/* <!--Navigation--> */}
             
                {/* <!--Menu--> */}
                <DropdownMenu />
          

             
             
              {/* Toggle bar icon */}
            </div>
          </div>
        </div>
      </header>
      {/* End header */}

      
      
    

     
     
      {/* End sidebar menu */}
    </>
  );
};

export default Headermain;
