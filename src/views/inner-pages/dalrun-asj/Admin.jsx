import React from "react";
import { Helmet } from "react-helmet";
import HeaderDefault from "../../../components/header/HeaderDefault";
import Footer from "../../../components/footer/Footer";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import AdminMenu from "../../../components/dalrun-asj/AdminMenu";
import { useLocation } from "react-router";
import AdminDashboard from "./inner/AdminDashboard";
import AdminChart from "./inner/AdminChart";
import AdminMembers from "./AdminMembers";
import AdminBbs from "./AdminBbs";
import AdminStore from "./AdminStore";

const Admin = () => {
  const location = useLocation();
  const menu = location.pathname.split("/").reverse()[0];
  
  const clickedMenu = (m) => {
      if(m === "dashboard") {
        return <AdminDashboard />;
      } else if(m === "members") {
        return <AdminMembers />;
      } else if(m === "bbs") {
        return <AdminBbs />;
      } else if(m === "store") {
        return <AdminStore />;
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

        <div className="main container-xxl" style={{display:"flex"}}>
          <AdminMenu />
          {clickedMenu(menu)}
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
}

export default Admin;
