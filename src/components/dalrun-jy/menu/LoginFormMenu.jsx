import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const LoginFormMenu = () => {

  const [login,setLogin]=useState([]);
  const [loginTF,setLoginTF]=useState(false);
  function loading(){
    const logindata=JSON.parse(localStorage.getItem('login'));

    if(logindata){
      setLogin(logindata);
      setLoginTF(true);
    }
  }

  
  const handleLogout = () => {
    localStorage.removeItem("login")
    localStorage.removeItem("memId");
  
  }
  useEffect(() => {
    
    loading();
    
  }, []);
  
  useEffect(() => {
  
  }, [loginTF]);

  return (
    <nav className="ptf-nav">
      {/* <!--Menu--> */}
      <ul className="sf-menu">

        { loginTF ?
        <li>
          <a href='/mainPage' onClick={handleLogout}>
            <span>로그아웃</span>
          </a>
        </li>
        :
        <li>
          <a href='/login'>
            <span>로그인</span>
          </a>
        </li>
       
        }

      </ul>
    </nav>
  );
};

export default LoginFormMenu;
