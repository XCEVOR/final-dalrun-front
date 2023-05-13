import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const LoginFormMenu = () => {

  const [login,setLogin]=useState([]);
  
  function loading(){
    const logindata=JSON.parse(localStorage.getItem('login'));
    console.log(logindata)
    if(logindata){
      setLogin(logindata);
      
    }
  }
  useEffect(() => {

    //localStorage.removeItem('login');
    loading();
  
  }, []);

  return (
    <nav className="ptf-nav">
      {/* <!--Menu--> */}
      <ul className="sf-menu">

        { login.length>0 &&
        <li>
          <Link to='/login'>
            <span>로그인</span>
          </Link>
        </li>
        ||
        <li>
          <Link to='/login'>
            <span>로그아웃</span>
          </Link>
        </li>
       
        }

      </ul>
    </nav>
  );
};

export default LoginFormMenu;
