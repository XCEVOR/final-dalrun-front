import React from "react";
import { Link } from "react-router-dom";

const menuContent = [
  {
    name: "대시보드",
    routerRoute: "/admin/dashboard"
  },
  {
    name: "회원관리",
    routerRoute: "/admin/members/member"
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
              <div className="logo">
                <Link to="/" title="Home" className='logo-Link'>
                  <img src={process.env.PUBLIC_URL + '/dalrun_logo.png'} className='logo'/>
                </Link>
              </div>
              {menuContent.map((item, i) => (
                <li key={i}>
                    <Link to={item.routerRoute}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <div className="admin-sidebar-menu_btns">
              <Link to={"/mainPage"}>돌아가기</Link>
              <button className="logout">로그아웃</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
