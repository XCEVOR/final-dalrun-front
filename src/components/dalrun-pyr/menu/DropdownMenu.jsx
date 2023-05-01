import React from "react";
import { Link } from "react-router-dom";


const DropdownMenu = () => {
  return (
    <nav className="ptf-nav ptf-nav--default">
      {/* <!--Menu--> */}
      <ul className="sf-menu sf-menu-onepage">
        <li>
          <Link to='/crewBbsMain'>
            <span>크루 찾기</span>
          </Link>

        </li>
        <li>
          <Link to='/regiMain'>
            <span>회원가입</span>
          </Link>

        </li>
        <li>
          <Link to='/login'>
            <span>로그인</span>
          </Link>

        </li>

        <li>
          <Link to='/'>
            <span>로그아웃</span>
          </Link>

        </li>


      </ul>
    </nav>
  );
};

export default DropdownMenu;
