import React, { useEffect, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";




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

//   const gotoLogin = () =>{
//     history("/login");
// }

  function logout(){
    localStorage.removeItem("login");
    alert("정상적으로 로그아웃 처리 되었습니다.");
  }

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
          <Link to='/login' onClick={logout}>
            <span>로그아웃</span>
          </Link>
        </li>
       
        }

      </ul>
    </nav>
  );
};

export default LoginFormMenu;
