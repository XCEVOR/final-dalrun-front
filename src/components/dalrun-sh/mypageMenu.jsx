import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import MyInform from "../../views/inner-pages/dalrun-osh/mypage/MyInform";
import MyCrew from "../../views/inner-pages/dalrun-osh/mypage/MyCrew";
import MyRunning from "../../views/inner-pages/dalrun-osh/mypage/MyRunning";
import MyStore from "../../views/inner-pages/dalrun-osh/mypage/MyStore";
import MyWrite from "../../views/inner-pages/dalrun-osh/mypage/MyWrite";
import MyRating from "../../views/inner-pages/dalrun-osh/mypage/MyRating";

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
    name: "게시글 내역",
    routerRoute: "/mypage/mywrite"
  },
  {
    name: "회원 등급",
    routerRoute: "/mypage/myrating"
  }
];

const MypageMenu = () => {
  return (
    <>
      <div className="ptf-mypage-sidebar">
        <div>
            <ul className="mypage-sidebar-menu_wrapper">
              {menuContent.map((item, i) => (
                <li key={i}>
                    <Link to={item.routerRoute}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <div className="mypage-sidebar-menu_btns">
              {/* <Link to={"#main"}>돌아가기</Link>
              <button className="logout">로그아웃</button> */}
            </div>
        </div>
        <Routes>
          <Route path="/mypage/myinform" element={<MyInform />} />
          <Route path="/mypage/mycrew" element={<MyCrew />} />
          <Route path="/mypage/myrunning/*" element={<MyRunning />} />
          <Route path="/mypage/mystore" element={<MyStore />} />
          <Route path="/mypage/mywrite" element={<MyWrite />} />
          <Route path="/mypage/myrating" element={<MyRating />} />         
        </Routes>
      </div>
    </>
  );
};

export default MypageMenu;
