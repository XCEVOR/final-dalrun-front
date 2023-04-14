import React from "react";
import { Link } from "react-router-dom";

const menuContent = [
  {
    name: "대시보드",
    menu: "dashboard"
  },
  {
    name: "회원관리",
    menu: "members"
  },
  {
    name: "게시물 관리",
    menu: "bbs"
  },
  {
    name: "쇼핑몰 관리",
    menu: "store"
  },
  {
    name: "차트",
    menu: "chart"
  },
];

const AdminMenu = () => {
  function menuHandle(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="ptf-admin-sidebar">
        <div>
            <ul className="admin-sidebar-menu_wrapper">
              {menuContent.map((item, i) => (
                <li key={i}>
                    <Link state={{menu:item.menu}}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <div className="admin-sidebar-menu_btns">
              <Link to={"#main"}>돌아가기</Link>
              <button className="logout">로그아웃</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
