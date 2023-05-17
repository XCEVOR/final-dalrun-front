import React from "react";
import { Link } from "react-router-dom";

const menuContent = [
  {
    name: "회원정보",
    routerRoute: "/mypage/myinform"
  },
  {
    name: "내 크루",
    routerRoute: "/mypage/mycrew"
  },
  {
    name: "내 러닝기록",
    routerRoute: "/mypage/myrunning"
  },
  {
    name: "내 스토어 구매이력",
    routerRoute: "/mypage/mystore"
  },
  {
    name: "내 문의 내역",
    routerRoute: "/mypage/mywrite/QnA"
  },
  {
    name: "회원 등급",
    routerRoute: "/mypage/myrating"
  }
];

const MypageMenu = () => {
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
              
              <Link to={"/mainPage"}>돌아가기</Link>

            </div>
        </div>

      </div>
    </>
  );
};

export default MypageMenu;
