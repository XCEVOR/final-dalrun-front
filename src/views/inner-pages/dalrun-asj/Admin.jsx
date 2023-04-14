import React from "react";
import { Helmet } from "react-helmet";
import HeaderDefault from "../../../components/header/HeaderDefault";
import Footer from "../../../components/footer/Footer";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import AdminMenu from "../../../components/dalrun-asj/AdminMenu";
import { useLocation } from "react-router";
import AdminDashboard from "./inner/AdminDashboard";
import AdminMember from "./inner/admin-members/AdminMember";
import AdminProductinquiry from "./inner/admin-bbs/admin-question/AdminProductinquiry";
import AdminProduct from "./inner/admin-store/AdminProduct";
import AdminChart from "./inner/AdminChart";

const Admin = () => {
  const location = useLocation();
  const menu = location.pathname.split("/").reverse()[0];
  
  const clickedMenu = (m) => {
      if(m === "dashboard") {
        return <AdminDashboard />;
      } else if(m === "member") {
        return <AdminMember />;
      } else if(m === "productinquiry") {
        return <AdminProductinquiry />;
      } else if(m === "product") {
        return <AdminProduct />;
      } else if(m === "chart") {
        return <AdminChart />;
      } 
    }

  return (
    <div className="ptf-site-wrapper animsition ptf-is--works-listing">
      <Helmet>
        <title>Dalrun - Admin</title>
      </Helmet>
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="main container-xxl" style={{display:"flex"}}>
          <AdminMenu />
          {/* <AdminDashboard /> */}
          {clickedMenu(menu)}
        </div>
      </div>
      {/* End .main */}

      {/* <!--Footer--> */}
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
}

export default Admin;
