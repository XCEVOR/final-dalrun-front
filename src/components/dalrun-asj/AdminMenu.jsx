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
          {/* <SidebarContent> */}
            <ul className="admin-sidebar-menu_wrapper">
              {menuContent.map((item, i) => (
                <li key={i}>
                    <Link state={{menu:item.menu}}>{item.name}</Link>
                </li>
              ))}
            </ul>
          {/* </SidebarContent> */}
        </div>
      </div>
      {/* End .ptf-offcanvas-menu__navigation */}
    </>
  );
};

export default AdminMenu;
