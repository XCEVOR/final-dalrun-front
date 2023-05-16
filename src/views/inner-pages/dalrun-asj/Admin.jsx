import React from "react";
import { Helmet } from "react-helmet";
import HeadermainPage from "../../../components/dalrun-jy/HeadermainPage";

import CopyRight from "../../../components/dalrun-jy/footer/CopyRight";
import AdminMenu from "../../../components/dalrun-asj/AdminMenu";
import AdminDashboard from "./inner/AdminDashboard";
import AdminChart from "./inner/AdminChart";
import AdminMembers from "./AdminMembers";
import AdminBbs from "./AdminBbs";
import AdminStore from "./AdminStore";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Admin = () => {
  const login = JSON.parse(localStorage.getItem('login'));
  const history = useNavigate();
  const [loading, setLoading] = useState(false);

  // 접근권한
  const access = () => {
    if(login !== null) {
      if(login.auth !== 1) {
        history('/mainPage'); 
        return;
      }
    } else {
      history('/mainPage');
      return;
    }
  }

  useEffect(() => {
    access();
    setLoading(true);
  }, []);

  return (
    <div className="ptf-site-wrapper animsition ptf-is--works-listing">
      <Helmet>
        <title>Dalrun - Admin</title>
      </Helmet>
      <div>
        {loading === true ?
        <div style={{display:"flex"}}>
          <AdminMenu />
          <Routes>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="members/*" element={<AdminMembers />} />
            <Route path="bbs/*" element={<AdminBbs />} />
            <Route path="store/*" element={<AdminStore />} />
            <Route path="chart" element={<AdminChart />} />
          </Routes>
        </div> : ''
        }
      </div>
    </div>
  );
}

export default Admin;
