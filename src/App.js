import React, { useEffect } from "react";
import { Link, NavLink, BrowserRouter, Routes, Route  } from "react-router-dom";
import AllRoutes from "./router/AllRoutes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import VisitorInfo from "./components/dalrun-asj/visitors/visitorInfo";
// import { jarallax } from "jarallax";
// import AnimatedCursor from "react-animated-cursor";

 
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>달런 달런</title>
        <meta name="description" content="Portfolio & Agency React Template" />
        <meta
          name="keywords"
          content="agency, bootstrap 5, business, clean, corporate, creative, fullpage, minimal, modern, multipurpose, parallax, personal, photography, portfolio, showcase"
        />
      </Helmet>
      <VisitorInfo />
      {/* End React Helmet for SEO */}

      {/* <AnimatedCursor
        innerSize={8}
        outerSize={44}
        // color="220, 53, 69"  
        color="29, 185, 125"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      /> */}
      {/* End Animated Cursor */}

      <ScrollToTop />
      {/* End Scroll To Top */}

      <AllRoutes />
      {/* End All Routes */}
    </>
  );
};

export default App;

