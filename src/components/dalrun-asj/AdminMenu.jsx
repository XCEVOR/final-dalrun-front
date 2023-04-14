import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AdminDashboard from "../../views/inner-pages/dalrun-asj/inner/AdminDashboard";
import AdminProductinquiry from "../../views/inner-pages/dalrun-asj/inner/admin-bbs/admin-question/AdminProductinquiry";
import AdminProduct from "../../views/inner-pages/dalrun-asj/inner/admin-store/AdminProduct";
import AdminChart from "../../views/inner-pages/dalrun-asj/inner/AdminChart";
import AdminMembers from "../../views/inner-pages/dalrun-asj/AdminMembers";

const menuContent = [
  {
    name: "대시보드",
    routerRoute: "/admin/dashboard"
  },
  {
    name: "회원관리",
    routerRoute: "/admin/members"
  },
  {
    name: "게시물 관리",
    routerRoute: "/admin/bbs/question/productinquiry"
  },
  {
    name: "쇼핑몰 관리",
    routerRoute: "/admin/store/product"
  },
  {
    name: "차트",
    routerRoute: "/admin/chart"
  },
];

const AdminMenu = () => {
  return (
    <>
      <div className="ptf-admin-sidebar">
        <div>
            <ul className="admin-sidebar-menu_wrapper">
              {menuContent.map((item, i) => (
                <li key={i}>
                    <Link to={item.routerRoute}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <div className="admin-sidebar-menu_btns">
              <Link to={"#main"}>돌아가기</Link>
              <button className="logout">로그아웃</button>
            </div>
        </div>
        <Routes>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/members/*" element={<AdminMembers />} />
          <Route path="/admin/bbs/question/productinquiry" element={<AdminProductinquiry />} />
          <Route path="/admin/store/product" element={<AdminProduct />} />
          <Route path="/admin/chart" element={<AdminChart />} />
        </Routes>
      </div>
    </>
  );
};

export default AdminMenu;
