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
import { Routes, Route } from "react-router-dom";

const Admin = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--works-listing">
      <Helmet>
        <title>Dalrun - Admin</title>
      </Helmet>
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />

        <div className="main container-xxl" style={{display:"flex"}}>
          <AdminMenu />
          <Routes>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="members/*" element={<AdminMembers />} />
            <Route path="bbs/*" element={<AdminBbs />} />
            <Route path="store/*" element={<AdminStore />} />
            <Route path="chart" element={<AdminChart />} />
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
}

export default Admin;
