import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const LoginFormMenu = () => {
  const logindata=JSON.parse(localStorage.getItem('login'));

  function logout() {
    localStorage.removeItem('login');
    localStorage.removeItem('memId');
  }

  useEffect(() => {
    console.log(logindata);
  
  }, [logindata]);

  return (
    <nav className="ptf-nav">
      {/* <!--Menu--> */}
      <ul className="sf-menu">

        <li>
        { logindata === null ?
          <Link to='/login'>
            <span>로그인</span>
          </Link> :
          <Link onClick={logout}>
            <span>로그아웃</span>
          </Link>
          }
        </li>
        <li>
        </li>
      </ul>
    </nav>
  );
};

export default LoginFormMenu;
